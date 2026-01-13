import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const HOSPITAL_SYSTEM_PROMPT = `You are a helpful virtual assistant for Vanasthali Hospital, a multi-specialty hospital located in Vanasthalipuram, Hyderabad.

**Hospital Information:**
- Name: Vanasthali Hospital
- Address: Plot No 25 & 26, Phase I, Vanasthalipuram, Hyderabad, Telangana
- Phone: +91 98765 43210
- Emergency: +91 98765 43211
- Email: info@vanasthalihospital.com
- Hours: Open 24/7 for emergencies. OPD: 8:00 AM - 9:00 PM
- Google Rating: 4.4/5 stars
- Instagram: @vanasthali_hospital

**Specialties:**
1. Gynaecology & Maternity Care - Expert care for pregnancy, childbirth, and women's health
2. Pediatrics - Comprehensive child healthcare from newborns to adolescents
3. ENT (Ear, Nose & Throat) - Treatment for hearing, sinus, throat conditions
4. Orthopedics - Bone, joint, and spine treatments including surgeries
5. General Surgery - Wide range of surgical procedures
6. Internal Medicine - Diagnosis and treatment of adult diseases
7. Cardiology - Heart health and cardiovascular care
8. Nephrology - Kidney care and dialysis services
9. Gastroenterology - Digestive system treatments
10. Pulmonology - Respiratory and lung care

**Facilities:**
- 24/7 Emergency Services
- Advanced ICU with modern equipment
- State-of-the-art Operation Theaters
- Diagnostic Lab with quick results
- Pharmacy available 24/7
- Ambulance service
- Private and semi-private rooms
- Cafeteria for visitors

**Appointment Booking:**
- Patients can book appointments by calling +91 98765 43210
- Walk-in consultations available during OPD hours
- Online booking available on the website

**Rules for responses:**
1. Only answer questions related to Vanasthali Hospital, its services, facilities, and healthcare topics
2. If asked about anything unrelated to healthcare or the hospital, politely redirect to hospital-related topics
3. Be friendly, professional, and empathetic
4. Keep responses concise but helpful
5. For medical emergencies, always advise calling the emergency number or visiting immediately
6. Never provide specific medical advice or diagnoses - always recommend consulting a doctor
7. If you don't know something specific about the hospital, say so and suggest contacting the hospital directly`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Received chat request with messages:", messages.length);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: HOSPITAL_SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Too many requests. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      
      return new Response(JSON.stringify({ error: "Failed to get response" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log("Streaming response from AI gateway");

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Hospital chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
