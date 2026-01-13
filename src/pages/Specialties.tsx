import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Baby,
  Stethoscope,
  Bone,
  Ear,
  Heart,
  Syringe,
  Activity,
  Brain,
  Pill,
  Microscope,
  Zap,
  Eye,
  CircleDot,
  Droplets,
} from "lucide-react";
import maternityImage from "@/assets/maternity-care.png";
import surgeryImage from "@/assets/surgery-team.png";
import Chatbot from "@/components/Chatbot";

const specialties = [
  {
    icon: Baby,
    title: "Gynaecology & Obstetrics",
    description: "Expert care for every stage of motherhood. Comprehensive prenatal, delivery, and postnatal care with experienced gynaecologists.",
    features: ["Normal & C-Section Delivery", "Prenatal Care", "High-Risk Pregnancy", "Fertility Treatment"],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Stethoscope,
    title: "Pediatrics",
    description: "Specialized healthcare for infants, children, and adolescents with child-friendly environment and caring doctors.",
    features: ["Newborn Care", "Vaccinations", "Growth Monitoring", "Pediatric Surgery"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Bone,
    title: "Orthopaedics",
    description: "Advanced treatment for bone, joint, and muscle conditions with modern surgical and non-surgical techniques.",
    features: ["Joint Replacement", "Spine Surgery", "Sports Medicine", "Fracture Care"],
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Ear,
    title: "ENT",
    description: "Comprehensive ear, nose, and throat care with experienced ENT specialists and modern diagnostic equipment.",
    features: ["Hearing Assessment", "Sinus Treatment", "Tonsillectomy", "Voice Disorders"],
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Heart,
    title: "Cardiology",
    description: "Heart health management with advanced diagnostics, preventive care, and intervention procedures.",
    features: ["ECG & Echo", "Stress Testing", "Pacemaker", "Heart Failure Management"],
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Syringe,
    title: "General Surgery",
    description: "Minimally invasive and traditional surgical procedures by skilled surgeons with modern OT facilities.",
    features: ["Laparoscopic Surgery", "Hernia Repair", "Appendectomy", "Gallbladder Surgery"],
    color: "from-teal-500 to-emerald-500",
  },
  {
    icon: Activity,
    title: "Emergency & Critical Care",
    description: "24/7 emergency services with rapid response, advanced ICU, and life-saving equipment.",
    features: ["24/7 Availability", "Advanced ICU", "Trauma Care", "Life Support"],
    color: "from-red-600 to-red-500",
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Expert diagnosis and treatment of brain and nervous system disorders with advanced imaging.",
    features: ["EEG Testing", "Stroke Care", "Epilepsy Treatment", "Migraine Management"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Pill,
    title: "General Medicine",
    description: "Comprehensive internal medicine for diagnosis and treatment of adult health conditions.",
    features: ["Health Checkups", "Diabetes Care", "Hypertension", "Thyroid Disorders"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: CircleDot,
    title: "Nephrology",
    description: "Kidney disease management with dialysis facilities and expert nephrologists.",
    features: ["Dialysis", "Kidney Stone", "CKD Management", "Transplant Support"],
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Droplets,
    title: "Urology",
    description: "Urinary tract and male reproductive health services with modern surgical techniques.",
    features: ["Stone Removal", "Prostate Care", "Urinary Disorders", "Laser Surgery"],
    color: "from-sky-500 to-blue-500",
  },
  {
    icon: Microscope,
    title: "Gastroenterology",
    description: "Digestive system disorders treatment with advanced endoscopy and colonoscopy facilities.",
    features: ["Endoscopy", "Colonoscopy", "Liver Disorders", "IBD Treatment"],
    color: "from-lime-500 to-green-500",
  },
  {
    icon: Zap,
    title: "Pulmonology",
    description: "Respiratory and lung disease management with modern pulmonary function testing.",
    features: ["Asthma Care", "COPD Treatment", "Sleep Apnea", "Lung Function Tests"],
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Eye,
    title: "Oncology",
    description: "Cancer care with compassionate treatment approach and modern therapeutic options.",
    features: ["Cancer Screening", "Chemotherapy", "Pain Management", "Palliative Care"],
    color: "from-fuchsia-500 to-pink-500",
  },
];

const Specialties = () => {
  return (
    <>
      <Helmet>
        <title>Our Specialties | Vanasthali Hospital - Multi-specialty Care</title>
        <meta
          name="description"
          content="Explore our medical specialties: Gynaecology, Pediatrics, Orthopaedics, ENT, Cardiology, General Surgery, Emergency Care & more at Vanasthali Hospital, Hyderabad."
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
                  Our Medical Specialties
                </h1>
                <p className="text-lg text-white/90">
                  Comprehensive multi-specialty healthcare services with experienced doctors
                  and state-of-the-art facilities under one roof.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Featured Specialties */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl overflow-hidden shadow-lg"
                >
                  <div className="grid md:grid-cols-2">
                    <div className="p-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-4">
                        <Baby className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                        Maternity & Gynaecology
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Expert care for every stage of motherhood with dedicated maternity wing,
                        experienced gynaecologists, and round-the-clock nursing care.
                      </p>
                      <Link to="/contact">
                        <Button variant="hero" size="lg">
                          Book Consultation
                        </Button>
                      </Link>
                    </div>
                    <div className="h-64 md:h-auto">
                      <img
                        src={maternityImage}
                        alt="Maternity Care"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl overflow-hidden shadow-lg"
                >
                  <div className="grid md:grid-cols-2">
                    <div className="p-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                        <Activity className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                        Emergency & ICU
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        24/7 emergency services equipped with state-of-the-art machinery for
                        life-saving interventions and critical care.
                      </p>
                      <a href="tel:+919876543210">
                        <Button variant="emergency" size="lg">
                          Emergency: Call Now
                        </Button>
                      </a>
                    </div>
                    <div className="h-64 md:h-auto">
                      <img
                        src={surgeryImage}
                        alt="Surgery Team"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* All Specialties Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                  All Our Specialties
                </h2>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {specialties.map((specialty, index) => (
                  <motion.div
                    key={specialty.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${specialty.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <specialty.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {specialty.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {specialty.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {specialty.features.slice(0, 2).map((feature) => (
                        <span
                          key={feature}
                          className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                  Need Expert Medical Advice?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Book an appointment with our specialists and get the best treatment
                  for your health concerns.
                </p>
                <Link to="/contact">
                  <Button variant="hero" size="xl">
                    Book Appointment Now
                  </Button>
                </Link>
              </motion.div>
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

export default Specialties;
