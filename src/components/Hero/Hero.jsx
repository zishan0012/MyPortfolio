import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, FileText } from 'lucide-react';

const roles = ["Frontend Developer", "MERN Stack Developer", "Problem Solver"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Custom typing loop
  useEffect(() => {
    let timer;
    const fullText = roles[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing text
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting text
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }

      setTypingSpeed(isDeleting ? 75 : 150);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  const handleScrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-[90vh] flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-10 pb-16 z-10"
    >
      {/* Premium background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.03),transparent_60%)] pointer-events-none"></div>

      {/* Floating Animated Geometric Objects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[20%] left-[15%] w-12 h-12 rounded-lg bg-gradient-to-tr from-primary/10 to-accent/10 border border-white/5 backdrop-blur-sm hidden sm:block"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[25%] right-[15%] w-16 h-16 rounded-full bg-gradient-to-br from-secondary/15 to-primary/5 border border-white/5 backdrop-blur-sm hidden sm:block"
        />
      </div>

      <div className="max-w-4xl text-center flex flex-col items-center">
        {/* Badge greeting */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="px-4 py-1.5 rounded-full glassmorphism text-sm font-medium text-accent border border-white/10 mb-6 flex items-center space-x-2"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          <span>Open for new opportunities</span>
        </motion.div>

        {/* Big Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl leading-none text-white tracking-tight"
        >
          Hi, I am <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent text-glow">Zishan Ahmad</span>
        </motion.h1>

        {/* Role Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-10 sm:h-12 mt-6 flex items-center justify-center"
        >
          <span className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium">
            A passionate{" "}
            <span className="text-accent font-semibold relative text-glow-accent border-r-2 border-accent pr-1 animate-pulse">
              {currentText}
            </span>
          </span>
        </motion.div>

        {/* Bio Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-400 text-base sm:text-lg max-w-2xl mt-6 leading-relaxed"
        >
          Dedicated MERN stack developer skilled in building scalable, high-performance web applications and intelligent AI-driven integrations. Creating visual excellence with clean, modular logic.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="/Resume-zishan.pdf"
            download="Zishan_Ahmad_Resume.pdf"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary via-secondary to-accent hover:brightness-110 shadow-lg shadow-primary/25 hover:shadow-primary/35 flex items-center justify-center space-x-2 transition-all duration-300 transform active:scale-95"
          >
            <FileText className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
          <button
            onClick={() => handleScrollToSection('contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-white border border-white/10 hover:border-accent/40 bg-white/5 hover:bg-white/10 flex items-center justify-center space-x-2 transition-all duration-300 transform active:scale-95 cursor-pointer"
          >
            <span>Contact Me</span>
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex items-center space-x-4"
        >
          <a
            href="https://github.com/zishan0012"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-primary/20 border border-white/5 hover:border-primary/40 text-gray-400 hover:text-white transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/zishan-ahmad-108a2a273/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-primary/20 border border-white/5 hover:border-primary/40 text-gray-400 hover:text-white transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:zishanahmad5065@gmail.com"
            className="p-3 rounded-full bg-white/5 hover:bg-primary/20 border border-white/5 hover:border-primary/40 text-gray-400 hover:text-white transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Bounce Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          onClick={() => handleScrollToSection('about')}
          className="mt-16 flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
        >
          <span className="text-sm font-medium text-gray-400 mb-2">
            Scroll Down
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 text-accent" />
          </motion.div>
        </motion.button>

      </div>
    </section>
  );
};

export default Hero;
