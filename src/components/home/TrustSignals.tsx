import { motion } from "framer-motion";
import { Star, Users, Clock, Award } from "lucide-react";

const stats = [
  {
    icon: Star,
    value: "4.4",
    label: "Google Rating",
    suffix: "/5",
  },
  {
    icon: Users,
    value: "50,000+",
    label: "Happy Patients",
    suffix: "",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Emergency Care",
    suffix: "",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years of Excellence",
    suffix: "",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    text: "Excellent maternity care. The doctors and staff were very supportive throughout my pregnancy journey. Highly recommended!",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    text: "Quick emergency response saved my father's life. The ICU facilities are world-class. Very grateful to the entire team.",
    rating: 5,
  },
  {
    name: "Lakshmi Devi",
    text: "Best hospital in Vanasthalipuram. Clean facilities, caring staff, and reasonable charges. My family trusts only Vanasthali.",
    rating: 5,
  },
  {
    name: "Mohammed Ali",
    text: "Had my knee surgery here. Dr. team was excellent. Recovery was smooth thanks to their post-operative care.",
    rating: 5,
  },
];

const TrustSignals = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
                <span className="text-secondary">{stat.suffix}</span>
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-medium uppercase tracking-wider text-sm">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            Patient Voices
          </h2>
          <p className="text-muted-foreground">
            Rated 4.4/5 on Google | Serving Hyderabad with Excellence
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-muted rounded-xl p-6 relative"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-foreground text-sm mb-4 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-primary text-sm">
                {testimonial.name}
              </p>
              <div className="absolute top-4 right-4 text-4xl text-primary/10 font-serif">
                "
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-12 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="mx-8 flex items-center gap-2 text-muted-foreground"
              >
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-sm">"{t.text.slice(0, 50)}..."</span>
                <span className="text-primary font-medium">- {t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
