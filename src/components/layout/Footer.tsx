import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="Vanasthali Hospital Logo" 
                className="h-12 w-auto object-contain bg-white rounded-lg p-1"
              />
              <div>
                <h3 className="font-serif text-xl font-bold">Vanasthali</h3>
                <p className="text-sm text-white/80">Hospital</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Comprehensive healthcare with compassion. We are committed to providing 
              quality medical services to our community 24/7.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/vanasthali_hospital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Specialties", path: "/specialties" },
                { name: "Facilities", path: "/facilities" },
                { name: "Book Appointment", path: "/contact" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path + link.name}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Our Specialties</h4>
            <ul className="space-y-3">
              {[
                "Gynaecology & Obstetrics",
                "Pediatrics",
                "General Surgery",
                "Orthopaedics",
                "ENT",
                "Emergency Care",
              ].map((specialty) => (
                <li key={specialty}>
                  <Link
                    to="/specialties"
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {specialty}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  Plot No 25 & 26, Phase I, Vanasthalipuram, Hyderabad - 500070
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-white/80 hover:text-white text-sm"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:info@vanasthalihospital.com"
                  className="text-white/80 hover:text-white text-sm"
                >
                  info@vanasthalihospital.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <span className="text-white/80 text-sm">24/7 Emergency Services</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <div className="border-t border-white/10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.4547680339746!2d78.56!3d17.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVanasthalipuram%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hospital Location"
          className="grayscale opacity-70"
        />
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
          <p>© 2025 Vanasthali Hospital. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-hospital-green rounded-full animate-pulse" />
            <span>24/7 Emergency Services Available</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
