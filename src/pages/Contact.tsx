import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, Clock, Send, Calendar, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const specialties = [
  "Gynaecology & Obstetrics",
  "Pediatrics",
  "Orthopaedics",
  "ENT",
  "Cardiology",
  "General Surgery",
  "Emergency Care",
  "Neurology",
  "General Medicine",
  "Nephrology",
  "Urology",
  "Gastroenterology",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    specialty: "",
    date: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Appointment request submitted!", {
      description: "We will contact you shortly to confirm your appointment.",
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      specialty: "",
      date: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact & Book Appointment | Vanasthali Hospital, Hyderabad</title>
        <meta
          name="description"
          content="Book an appointment at Vanasthali Hospital, Vanasthalipuram, Hyderabad. Contact us: +91 98765 43210. 24/7 Emergency Services available."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative py-24 bg-gradient-to-br from-primary to-primary/80">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-white max-w-3xl mx-auto"
              >
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                  Contact Us
                </h1>
                <p className="text-lg text-white/90">
                  Book an appointment or reach out to us for any healthcare queries.
                  We're here to help you 24/7.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Contact Cards */}
          <section className="py-12 -mt-8">
            <div className="container mx-auto px-4">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: "+91 98765 43210",
                    action: "tel:+919876543210",
                    color: "bg-primary",
                  },
                  {
                    icon: MessageCircle,
                    title: "WhatsApp",
                    content: "Chat with us",
                    action: "https://wa.me/919876543210",
                    color: "bg-[hsl(145,70%,40%)]",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "info@vanasthalihospital.com",
                    action: "mailto:info@vanasthalihospital.com",
                    color: "bg-secondary",
                  },
                  {
                    icon: Clock,
                    title: "Emergency",
                    content: "24/7 Available",
                    action: "tel:+919876543210",
                    color: "bg-hospital-red",
                  },
                ].map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.action}
                    target={item.action.startsWith("http") ? "_blank" : undefined}
                    rel={item.action.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-4"
                  >
                    <div
                      className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.title}</p>
                      <p className="font-semibold text-foreground">{item.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Appointment Form */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-card rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-serif font-bold text-foreground">
                          Book an Appointment
                        </h2>
                        <p className="text-muted-foreground text-sm">
                          Fill the form and we'll contact you
                        </p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Full Name *
                          </label>
                          <Input
                            required
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Phone Number *
                          </label>
                          <Input
                            required
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Email (Optional)
                        </label>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Select Specialty *
                          </label>
                          <Select
                            required
                            value={formData.specialty}
                            onValueChange={(value) =>
                              setFormData({ ...formData, specialty: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Choose specialty" />
                            </SelectTrigger>
                            <SelectContent>
                              {specialties.map((specialty) => (
                                <SelectItem key={specialty} value={specialty}>
                                  {specialty}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Preferred Date *
                          </label>
                          <Input
                            required
                            type="date"
                            value={formData.date}
                            onChange={(e) =>
                              setFormData({ ...formData, date: e.target.value })
                            }
                            min={new Date().toISOString().split("T")[0]}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Additional Message
                        </label>
                        <Textarea
                          placeholder="Tell us about your health concern..."
                          rows={4}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="hero"
                        size="xl"
                        className="w-full gap-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Submitting..."
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Book Appointment
                          </>
                        )}
                      </Button>
                    </form>
                  </div>
                </motion.div>

                {/* Map & Address */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {/* Address Card */}
                  <div className="bg-card rounded-2xl p-8 shadow-lg">
                    <h3 className="text-xl font-serif font-bold text-foreground mb-6">
                      Our Location
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Address</p>
                          <p className="text-muted-foreground">
                            Plot No 25 & 26, Phase I,<br />
                            Vanasthalipuram, Hyderabad - 500070,<br />
                            Telangana, India
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Working Hours</p>
                          <p className="text-muted-foreground">
                            OPD: 9:00 AM - 9:00 PM<br />
                            Emergency: 24 Hours / 7 Days
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Google Map */}
                  <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.4547680339746!2d78.56!3d17.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVanasthalipuram%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Hospital Location"
                    />
                  </div>

                  {/* Quick Actions */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <a
                      href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="whatsapp" size="lg" className="w-full gap-2">
                        <MessageCircle className="w-5 h-5" />
                        WhatsApp Us
                      </Button>
                    </a>
                    <a href="tel:+919876543210">
                      <Button variant="call" size="lg" className="w-full gap-2">
                        <Phone className="w-5 h-5" />
                        Call Now
                      </Button>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
};

export default Contact;
