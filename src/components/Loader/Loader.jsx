import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        y: -100,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-bg"
    >
      <div className="relative flex flex-col items-center">
        {/* Glowing concentric background rings */}
        <div className="absolute w-40 h-40 rounded-full bg-primary/20 blur-xl animate-pulse-slow"></div>
        <div className="absolute w-32 h-32 rounded-full bg-accent/10 blur-lg animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

        {/* Outer Spinners */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, ease: "linear", repeat: Infinity }}
          className="w-24 h-24 rounded-full border-t-2 border-r-2 border-primary border-opacity-80"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
          className="absolute w-20 h-20 rounded-full border-b-2 border-l-2 border-accent border-opacity-80"
        />

        {/* Inner Glassmorphic Circle containing Initials */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="absolute w-16 h-16 rounded-full glassmorphism flex items-center justify-center border border-white/20 shadow-lg shadow-black/40"
        >
          <span className="font-display font-extrabold text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent tracking-tighter">
            ZA
          </span>
        </motion.div>

        {/* Text Loader */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-6 flex flex-col items-center"
        >
          <h2 className="font-display font-semibold text-lg text-gray-300">
            Zishan Ahmad
          </h2>
          <p className="text-sm font-medium text-accent mt-1 animate-pulse">
            MERN Stack Developer
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
