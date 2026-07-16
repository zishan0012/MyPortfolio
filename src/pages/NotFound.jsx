import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, AlertCircle } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';

const NotFound = () => {
  return (
    <MainLayout>
      <div className="min-h-[70vh] flex items-center justify-center px-4 relative z-10">
        
        {/* Glow backdrop */}
        <div className="absolute w-80 h-80 rounded-full bg-primary/10 blur-[100px] pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md text-center p-8 rounded-3xl border border-white/8 bg-white/3 glassmorphism shadow-2xl flex flex-col items-center"
        >
          <div className="p-4 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6 animate-pulse">
            <AlertCircle className="w-12 h-12 stroke-[1.5px]" />
          </div>

          <h1 className="font-display font-extrabold text-7xl text-white tracking-tighter">
            404
          </h1>
          
          <h2 className="font-display font-bold text-xl text-white mt-4">
            Page Not Found
          </h2>

          <p className="text-gray-400 text-sm mt-3 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <Link
            to="/"
            className="mt-8 px-6 py-3.5 w-full bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold uppercase tracking-wider text-xs flex items-center justify-center space-x-2 shadow-lg shadow-primary/25 hover:brightness-110 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Go Back Home</span>
          </Link>
        </motion.div>

      </div>
    </MainLayout>
  );
};

export default NotFound;
