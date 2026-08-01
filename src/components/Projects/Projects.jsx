import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { projectsData } from '../../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-accent mb-2"
          >
            My Showcase
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-2"
          >
            Featured Projects
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-white/8 bg-white/3 glassmorphism hover:border-primary/25 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between group h-full"
            >
              <div>
                {/* Visual Image container with overlay */}
                <div className="relative h-48 overflow-hidden bg-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-80"
                    loading="lazy"
                  />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 z-20 px-3 py-1 text-xs font-medium text-accent bg-dark-bg/80 border border-white/10 rounded-full flex items-center space-x-1.5">
                    <Layers className="w-3 h-3 text-accent" />
                    <span>{project.category}</span>
                  </span>
                </div>

                {/* Info Content */}
                <div className="p-6 text-left">
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-accent transition-colors duration-200 leading-snug">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-xs sm:text-sm mt-3 line-clamp-3 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-semibold text-gray-300 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-[10px] font-semibold text-accent bg-accent/5 px-2.5 py-1 rounded-md border border-accent/10">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons panel */}
              <div className="p-6 pt-0 border-t border-white/5 mt-4 flex items-center justify-between">
                
                {/* External Links */}
                <div className="flex items-center space-x-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-all duration-300"
                    title="View Source Code"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-accent/20 hover:border-accent/30 transition-all duration-300"
                    title="View Live Site"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Know More Router Redirect */}
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center space-x-1 text-sm font-medium text-accent group-hover:text-white transition-colors duration-200"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
