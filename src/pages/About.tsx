import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Award, Users, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import staffAward from "@/assets/staff-award.png";
import reception from "@/assets/reception.png";
import medicalTeam from "@/assets/medical-team.png";

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "We treat every patient with empathy, respect, and personalized attention.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to the highest standards of medical care and patient outcomes.",
  },
  {
    icon: Users,
    title: "Team Spirit",
    description: "Our dedicated team works together to provide comprehensive healthcare.",
  },
  {
    icon: Clock,
    title: "Accessibility",
    description: "24/7 availability ensuring healthcare is always within reach.",
  },
];

const milestones = [
  { year: "2010", event: "Hospital Founded" },
  { year: "2013", event: "ICU Wing Opened" },
  { year: "2016", event: "Advanced OT Installed" },
  { year: "2019", event: "Maternity Wing Expansion" },
  { year: "2022", event: "50,000+ Patients Served" },
  { year: "2025", event: "Continued Excellence" },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Vanasthali Hospital - Our Mission & Vision</title>
        <meta
          name="description"
          content="Learn about Vanasthali Hospital's mission, vision, and commitment to quality healthcare in Hyderabad. 15+ years of serving the community with compassion."
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
                  About Vanasthali Hospital
                </h1>
                <p className="text-lg text-white/90">
                  For over 15 years, we have been serving the community of Vanasthalipuram
                  and Hyderabad with quality healthcare services and compassionate care.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={reception}
                    alt="Hospital Reception"
                    className="rounded-2xl shadow-lg"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                        Our Mission
                      </h3>
                      <p className="text-muted-foreground">
                        To provide accessible, affordable, and high-quality healthcare
                        services to every individual in our community, ensuring that no
                        one is denied medical care due to financial constraints.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Eye className="w-7 h-7 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                        Our Vision
                      </h3>
                      <p className="text-muted-foreground">
                        To be the most trusted healthcare provider in Hyderabad,
                        recognized for our commitment to patient care, medical
                        excellence, and community service.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-20 bg-muted">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <span className="text-secondary font-medium uppercase tracking-wider text-sm">
                  Our Values
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
                  What We Stand For
                </h2>
              </motion.div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card p-6 rounded-xl shadow-card text-center"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-serif font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-secondary font-medium uppercase tracking-wider text-sm">
                    Why Choose Us
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-6">
                    Your Trusted Healthcare Partner
                  </h2>
                  <ul className="space-y-4">
                    {[
                      "24/7 Emergency & ICU Services",
                      "Experienced & Caring Medical Staff",
                      "State-of-the-art Medical Equipment",
                      "Affordable Treatment Packages",
                      "Multi-specialty Care Under One Roof",
                      "Clean & Comfortable Facilities",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="inline-block mt-8">
                    <Button variant="hero" size="lg">
                      Book an Appointment
                    </Button>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-4"
                >
                  <img
                    src={staffAward}
                    alt="Staff Recognition"
                    className="rounded-xl shadow-lg"
                  />
                  <img
                    src={medicalTeam}
                    alt="Medical Team"
                    className="rounded-xl shadow-lg mt-8"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="py-20 bg-primary text-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <span className="text-secondary font-medium uppercase tracking-wider text-sm">
                  Our Journey
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2">
                  Hospital Milestones
                </h2>
              </motion.div>
              <div className="flex flex-wrap justify-center gap-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold text-lg">{milestone.year}</span>
                    </div>
                    <p className="text-sm text-white/90 max-w-[120px]">{milestone.event}</p>
                  </motion.div>
                ))}
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

export default About;
