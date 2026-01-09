import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[hsl(145,70%,40%)] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+919876543210"
        className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        aria-label="Call Hospital"
      >
        <Phone className="w-6 h-6" />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
