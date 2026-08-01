import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-bg border-t border-white/5 pt-12 pb-8 z-10">
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/5 items-center md:items-start text-center md:text-left">

          {/* Logo & Brief */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-accent flex items-center justify-center font-display font-extrabold text-white">
                Z
              </div>
              <span className="font-display font-bold text-lg text-white">
                <span className="text-primary">Portfolio</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              MERN Stack Developer specialized in building scalable, premium, and intelligent web applications.
            </p>
          </div>

          {/* Contact Quick Details */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h4 className="text-white font-display font-semibold text-lg mb-2">
              Contact Details
            </h4>
            <div className="flex items-center space-x-2 text-gray-400 text-sm hover:text-accent transition-colors duration-200">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:zishanahmad5065@gmail.com">zishanahmad5065@gmail.com</a>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm hover:text-accent transition-colors duration-200">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:+919142915494">+91 9142915494</a>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Chandigarh, India</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <h4 className="text-white font-display font-semibold text-lg">
              Follow Me
            </h4>
            <div className="flex space-x-3">
              <a
                href="https://github.com/zishan0012" // Standard fallback based on name
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glassmorphism-light border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/zishan-ahmad-108a2a273/" // Standard fallback based on name
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glassmorphism-light border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <a
              href="#hero"
              onClick={handleScrollToTop}
              className="text-xs text-accent hover:text-white transition-colors duration-200"
            >
              Back to top
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-center text-xs text-gray-500 space-y-2 md:space-y-0">
          <p>© {currentYear} Zishan Ahmad. All rights reserved.</p>
          <p>
            Designed & Developed by <span className="ml-1 mr-1 text-accent"> Zishan Ahmad </span>
            using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
