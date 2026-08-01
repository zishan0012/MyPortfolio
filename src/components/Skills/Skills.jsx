import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '../../data/skills';
import { Sparkles, Terminal, Database, Shield, Layers, HelpCircle } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Tech' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'tools', label: 'Tools' },
    { id: 'genai', label: 'GenAI' }
  ];

  // Helper icons for categories
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'frontend': return <Layers className="w-4 h-4" />;
      case 'backend': return <Terminal className="w-4 h-4" />;
      case 'database': return <Database className="w-4 h-4" />;
      case 'tools': return <Shield className="w-4 h-4" />;
      case 'genai': return <Sparkles className="w-4 h-4 animate-pulse" />;
      default: return <HelpCircle className="w-4 h-4" />;
    }
  };

  // Extract all skills for the 'all' tab, or filter accordingly
  const filteredSkills = activeTab === 'all'
    ? skillCategories.flatMap(cat => cat.skills.map(s => ({ ...s, categoryId: cat.id })))
    : skillCategories.find(cat => cat.id === activeTab)?.skills.map(s => ({ ...s, categoryId: activeTab })) || [];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-dark-bg/40">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-accent mb-2"
          >
            My Toolbox
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-2"
          >
            Skills & Proficiencies
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-2xl mx-auto">
          {tabs.map((tab) => {
            const isTabActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center space-x-1.5 cursor-pointer border ${
                  isTabActive
                    ? 'bg-gradient-to-r from-primary to-secondary text-white border-transparent shadow-md shadow-primary/25'
                    : 'bg-white/3 text-gray-400 hover:text-white border-white/5 hover:bg-white/5'
                }`}
              >
                {tab.id !== 'all' && getCategoryIcon(tab.id)}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              // Get category meta
              const parentCat = skillCategories.find(c => c.id === skill.categoryId);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 15 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  key={`${skill.categoryId}-${skill.name}`}
                  className="p-6 rounded-2xl border border-white/8 bg-white/3 flex flex-col justify-between glassmorphism relative overflow-hidden group glow-card shadow-lg hover:border-accent/30"
                >
                  {/* Decorative background glow on hover */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/5 rounded-bl-full opacity-50 pointer-events-none group-hover:scale-125 transition-transform duration-300"></div>

                  <div className="flex items-center justify-between mb-4 z-10">
                    <div className="flex items-center space-x-2.5">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-accent flex items-center justify-center">
                        {getCategoryIcon(skill.categoryId)}
                      </div>
                      <h4 className="font-display font-semibold text-base text-white tracking-wide">
                        {skill.name}
                      </h4>
                    </div>
                    
                    <span className="text-xs font-medium text-accent py-1 px-2.5 rounded-full bg-accent/10">
                      {parentCat?.title.split(' ')[0]} {/* Category short title */}
                    </span>
                  </div>

                  {/* Proficiency progress bar */}
                  <div className="mt-4 z-10">
                    <div className="flex justify-between items-center mb-1.5 text-xs text-gray-400 font-medium">
                      <span>Proficiency</span>
                      <span className="font-mono font-semibold text-white">{skill.level}%</span>
                    </div>

                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
