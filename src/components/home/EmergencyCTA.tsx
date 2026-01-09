import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Ambulance } from "lucide-react";

const EmergencyCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-hospital-red to-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <Ambulance className="w-8 h-8 text-white" />
              <span className="text-white/90 uppercase tracking-wider text-sm font-medium">
                Emergency Services
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              24/7 Emergency Care Available
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
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
              <Clock className="w-6 h-6 text-white" />
              <div className="text-white">
                <p className="text-sm opacity-80">Available</p>
                <p className="font-bold text-lg">24 Hours / 7 Days</p>
              </div>
            </div>
            <a href="tel:+919876543210">
              <Button
                variant="secondary"
                size="xl"
                className="gap-2 bg-white text-primary hover:bg-white/90"
              >
                <Phone className="w-5 h-5" />
                Call Emergency
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyCTA;
