import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { internshipData } from '../../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold text-accent uppercase tracking-widest font-mono"
          >
            My Journey
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-2"
          >
            Professional Experience
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Vertical central line (Desktop only, becomes left-aligned on mobile) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-accent opacity-30 transform -translate-x-[1px]"></div>

          <div className="space-y-12">
            {internshipData.map((job, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={job.company}
                  className={`flex flex-col md:flex-row items-stretch relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Outer dot marker */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-accent z-20 transform -translate-x-[5px] timeline-dot shadow-[0_0_10px_rgba(6,182,212,0.6)]"></div>

                  {/* Left spacing for desktop */}
                  <div className="w-full md:w-1/2 md:px-8 hidden md:block"></div>

                  {/* Card Content container */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8"
                  >
                    <div className="p-6 md:p-8 rounded-2xl border border-white/8 bg-white/3 glassmorphism hover:border-primary/20 shadow-xl relative overflow-hidden group">
                      
                      {/* Interactive Accent Corner */}
                      <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Header details */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 rounded-full">
                          {job.duration}
                        </span>
                        
                        <div className="flex items-center space-x-1.5 text-xs text-gray-400">
                          <MapPin className="w-3.5 h-3.5 text-primary" />
                          <span>{job.location}</span>
                        </div>
                      </div>

                      {/* Title & Company */}
                      <h4 className="font-display font-bold text-xl text-white group-hover:text-accent transition-colors duration-200">
                        {job.role}
                      </h4>
                      <h5 className="font-display font-semibold text-sm text-gray-300 mt-1 flex items-center space-x-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-primary" />
                        <span>{job.company}</span>
                      </h5>

                      {/* Responsibilities bullet checklist */}
                      <ul className="mt-6 space-y-3">
                        {job.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start text-xs sm:text-sm text-gray-400 leading-relaxed text-left">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-2.5 flex-shrink-0"></span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
