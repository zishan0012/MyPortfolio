import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar, Trophy, Star } from 'lucide-react';
import { educationData, achievementsData } from '../../data/experience';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-dark-bg/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold text-accent uppercase tracking-widest font-mono"
          >
            Milestones
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-2"
          >
            Education & Achievements
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Education Subsection */}
        <div className="mb-20">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white text-left mb-8 flex items-center space-x-2.5">
            <GraduationCap className="w-6 h-6 text-accent" />
            <span>Academic Background</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 md:p-8 rounded-2xl border border-white/8 bg-white/3 glassmorphism hover:border-primary/20 transition-all duration-300 shadow-lg text-left relative overflow-hidden group"
              >
                {/* Visual glass light strip */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-accent"></div>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-accent uppercase tracking-wider py-1 px-2.5 rounded-full bg-accent/10">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.duration}</span>
                  </div>
                  <span className="font-mono text-sm font-bold text-white bg-white/5 border border-white/10 px-3 py-1 rounded-lg">
                    {edu.score}
                  </span>
                </div>

                <h4 className="font-display font-extrabold text-xl text-white leading-tight group-hover:text-accent transition-colors duration-200">
                  {edu.degree}
                </h4>
                
                <h5 className="font-display font-semibold text-sm text-gray-300 mt-2 flex items-center space-x-1.5">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span>{edu.institution}</span>
                </h5>

                <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Subsection */}
        <div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white text-left mb-8 flex items-center space-x-2.5">
            <Trophy className="w-5 h-5 text-accent" />
            <span>Honors & Extracurriculars</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievementsData.map((ach, index) => (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl border border-white/8 bg-white/3 glassmorphism hover:border-primary/20 transition-all duration-300 shadow-md text-left flex flex-col justify-between relative group"
              >
                {/* Star overlay indicator */}
                <div className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/5 border border-white/5 text-accent group-hover:text-white transition-colors duration-300">
                  <Star className="w-4 h-4" />
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent font-mono block mb-1.5">
                    {ach.duration}
                  </span>
                  
                  <h4 className="font-display font-bold text-lg text-white group-hover:text-accent transition-colors duration-200 leading-snug">
                    {ach.title}
                  </h4>
                  
                  <h5 className="text-xs text-gray-400 font-semibold mt-1">
                    {ach.subtitle}
                  </h5>

                  <p className="text-gray-400 text-xs sm:text-sm mt-4 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
