import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Bed,
  Heart,
  Syringe,
  Microscope,
  Ambulance,
  Activity,
  Shield,
  Clock,
  Wifi,
  Utensils,
} from "lucide-react";
import hospitalExterior from "@/assets/hospital-exterior.png";
import reception from "@/assets/reception.png";
import surgeryTeam from "@/assets/surgery-team.png";
import Chatbot from "@/components/Chatbot";

const facilities = [
  {
    icon: Activity,
    title: "Advanced ICU",
    description: "State-of-the-art Intensive Care Unit with modern life support systems, continuous monitoring, and experienced critical care team.",
    features: ["Multi-parameter Monitors", "Ventilators", "24/7 Intensivist", "Isolation Facilities"],
  },
  {
    icon: Syringe,
    title: "Modern Operation Theatres",
    description: "Fully equipped operation theatres with latest surgical equipment, laminar airflow, and HEPA filtration for safe surgeries.",
    features: ["Laminar Airflow", "Laparoscopic Setup", "C-Arm Imaging", "Advanced Anesthesia"],
  },
  {
    icon: Ambulance,
    title: "24/7 Emergency Services",
    description: "Round-the-clock emergency care with rapid response team, trauma care facilities, and ambulance services.",
    features: ["Trauma Care", "Ambulance Service", "Quick Response", "Emergency Surgeries"],
  },
  {
    icon: Microscope,
    title: "Diagnostic Lab",
    description: "In-house pathology and diagnostic laboratory with quick turnaround time for accurate test results.",
    features: ["Pathology", "Microbiology", "Biochemistry", "Histopathology"],
  },
  {
    icon: Heart,
    title: "Cardiology Suite",
    description: "Advanced cardiac diagnostic and monitoring equipment including ECG, Echo, and stress testing facilities.",
    features: ["ECG", "Echocardiography", "TMT", "Holter Monitoring"],
  },
  {
    icon: Bed,
    title: "Patient Rooms",
    description: "Comfortable and hygienic patient rooms including general wards, semi-private, and deluxe rooms.",
    features: ["AC Rooms", "Attached Bathroom", "TV & WiFi", "Attendant Bed"],
  },
];

const amenities = [
  { icon: Wifi, label: "Free WiFi" },
  { icon: Utensils, label: "Cafeteria" },
  { icon: Shield, label: "24/7 Security" },
  { icon: Clock, label: "Pharmacy" },
];

const Facilities = () => {
  return (
    <>
      <Helmet>
        <title>Facilities & ICU | Vanasthali Hospital - Advanced Medical Facilities</title>
        <meta
          name="description"
          content="Explore our advanced facilities: 24/7 Emergency, Modern ICU, Operation Theatres, Diagnostic Lab & more at Vanasthali Hospital, Hyderabad."
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
                  Our Facilities
                </h1>
                <p className="text-lg text-white/90">
                  State-of-the-art medical infrastructure designed to provide
                  the highest quality healthcare with patient comfort in mind.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Highlight Banner */}
          <section className="py-8 bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                {amenities.map((amenity) => (
                  <div key={amenity.label} className="flex items-center gap-2">
                    <amenity.icon className="w-5 h-5" />
                    <span className="font-medium">{amenity.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Hospital Images */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src={hospitalExterior}
                    alt="Hospital Building"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 bg-card">
                    <h3 className="font-serif font-semibold text-foreground">Hospital Building</h3>
                    <p className="text-sm text-muted-foreground">Modern multi-story facility</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src={reception}
                    alt="Reception Area"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 bg-card">
                    <h3 className="font-serif font-semibold text-foreground">Reception & Waiting</h3>
                    <p className="text-sm text-muted-foreground">Comfortable waiting area</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src={surgeryTeam}
                    alt="Operation Theatre"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 bg-card">
                    <h3 className="font-serif font-semibold text-foreground">Operation Theatre</h3>
                    <p className="text-sm text-muted-foreground">Modern surgical facilities</p>
                  </div>
                </motion.div>
              </div>

              {/* Facilities Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <span className="text-secondary font-medium uppercase tracking-wider text-sm">
                  Advanced Infrastructure
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
                  Healthcare Facilities
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {facilities.map((facility, index) => (
                  <motion.div
                    key={facility.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <facility.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                      {facility.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {facility.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {facility.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Emergency CTA */}
          <section className="py-16 bg-gradient-to-r from-hospital-red to-primary">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-center lg:text-left text-white"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                    <Ambulance className="w-8 h-8" />
                    <span className="uppercase tracking-wider text-sm font-medium">
                      Emergency Services
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                    24/7 Emergency & ICU Care
                  </h2>
                  <p className="text-white/90 max-w-xl">
                    Our emergency department is equipped with advanced life-saving equipment
                    and staffed by experienced doctors round the clock.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <a href="tel:+919876543210">
                    <Button
                      variant="secondary"
                      size="xl"
                      className="bg-white text-primary hover:bg-white/90 gap-2"
                    >
                      <Ambulance className="w-5 h-5" />
                      Call Emergency
                    </Button>
                  </a>
                  <Link to="/contact">
                    <Button variant="heroOutline" size="xl">
                      Book Appointment
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <FloatingButtons />
        <Chatbot />
      </div>
    </>
  );
};

export default Facilities;
