import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Baby, 
  Stethoscope, 
  Bone, 
  Ear, 
  Heart, 
  Syringe,
  Activity,
  Brain
} from "lucide-react";

const services = [
  {
    icon: Baby,
    title: "Gynaecology & Obstetrics",
    description: "Expert maternity care, safe deliveries, and comprehensive women's health services.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Stethoscope,
    title: "Pediatrics",
    description: "Specialized care for infants, children, and adolescents with compassionate doctors.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Bone,
    title: "Orthopaedics",
    description: "Advanced treatment for bone, joint, and muscle conditions with modern techniques.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Ear,
    title: "ENT",
    description: "Comprehensive ear, nose, and throat care with experienced specialists.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Heart,
    title: "Cardiology",
    description: "Heart health management with advanced diagnostics and treatment options.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Syringe,
    title: "General Surgery",
    description: "Minimally invasive and traditional surgical procedures by skilled surgeons.",
    color: "from-teal-500 to-emerald-500",
  },
  {
    icon: Activity,
    title: "Emergency Care",
    description: "24/7 emergency services with rapid response and critical care facilities.",
    color: "from-red-600 to-red-500",
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Expert diagnosis and treatment of brain and nervous system disorders.",
    color: "from-indigo-500 to-purple-500",
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium uppercase tracking-wider text-sm">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            Comprehensive Medical Care
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of medical specialties to cater to all your healthcare needs
            under one roof with expert doctors and modern facilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to="/specialties"
                className="block bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/specialties"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            View All Specialties
            <span className="text-lg">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
