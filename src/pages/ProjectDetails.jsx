import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, ShieldCheck, Cpu, Code2, Globe } from 'lucide-react';
import { projectsData } from '../data/projects';
import MainLayout from '../layouts/MainLayout';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  // If the project doesn't exist, show a nice fallback message
  if (!project) {
    return (
      <MainLayout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
          <h2 className="font-display font-extrabold text-3xl text-white">Project Not Found</h2>
          <p className="text-gray-400 mt-2">The project case study you are looking for does not exist.</p>
          <Link
            to="/"
            className="mt-6 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold uppercase tracking-wider text-sm flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.5 }}
        className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left"
      >
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-sm font-semibold text-gray-400 hover:text-accent transition-colors duration-200 mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>

        {/* Large Banner Card */}
        <div className="relative h-64 sm:h-[400px] rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/40 to-transparent z-10"></div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute bottom-6 sm:bottom-12 left-6 sm:left-12 z-20 max-w-2xl pr-4">
            <span className="px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 rounded-full">
              Case Study
            </span>
            <h1 className="font-display font-extrabold text-2xl sm:text-5xl text-white mt-3 leading-tight drop-shadow-md">
              {project.title}
            </h1>
            <p className="text-gray-300 text-sm sm:text-lg mt-2 font-medium drop-shadow-sm">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Two-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Description, Features, Challenges */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Project Overview */}
            <div className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-white border-b border-white/5 pb-2">
                Project Overview
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-white border-b border-white/5 pb-2">
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feat, index) => (
                  <li key={index} className="flex items-start text-gray-300 text-sm sm:text-base leading-relaxed">
                    <ShieldCheck className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges & Solutions */}
            <div className="space-y-6">
              <h2 className="font-display font-bold text-2xl text-white border-b border-white/5 pb-2">
                Engineering Challenges & Solutions
              </h2>
              
              <div className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-2xl border border-white/5 bg-white/2 glassmorphism-light space-y-3"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 font-mono">
                        Challenge #{index + 1}
                      </span>
                      <p className="text-white text-sm font-semibold mt-1">
                        {challenge}
                      </p>
                    </div>
                    
                    <div className="border-t border-white/5 pt-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#10B981] font-mono">
                        Solution Applied
                      </span>
                      <p className="text-gray-300 text-sm mt-1">
                        {project.solutions[index]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sidebar metadata */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Info Card */}
            <div className="p-6 rounded-2xl border border-white/8 bg-white/3 glassmorphism space-y-6 shadow-xl">
              <h3 className="font-display font-bold text-lg text-white border-b border-white/5 pb-3">
                Project Details
              </h3>

              {/* Stack items */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="p-1.5 rounded-lg bg-primary/10 text-accent">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 font-mono block uppercase">Stack</span>
                    <span className="font-semibold text-white">{project.category}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-sm">
                  <div className="p-1.5 rounded-lg bg-primary/10 text-accent">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 font-mono block uppercase">Status</span>
                    <span className="font-semibold text-[#10B981]">Production Ready</span>
                  </div>
                </div>
              </div>

              {/* Technologies List */}
              <div className="pt-4 border-t border-white/5">
                <span className="text-[10px] text-gray-500 font-mono block uppercase mb-2">Technologies Used</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold text-white bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link Buttons */}
              <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-center text-white bg-gradient-to-r from-primary to-secondary hover:brightness-110 shadow-lg shadow-primary/25 flex items-center justify-center space-x-2 transition-all duration-300 transform active:scale-95"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-center text-white border border-white/10 hover:border-accent/40 bg-white/5 hover:bg-white/10 flex items-center justify-center space-x-2 transition-all duration-300 transform active:scale-95"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </a>
              </div>
            </div>

            {/* Resume CV reminder box */}
            <div className="p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent glassmorphism-light text-center">
              <h4 className="font-display font-semibold text-sm text-white">Need Offline Details?</h4>
              <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                You can download the full resume PDF to examine detailed coursework structure.
              </p>
              <a
                href="/zishanresume.pdf"
                download="Zishan_Ahmad_Resume.pdf"
                className="mt-4 w-full py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/30 flex items-center justify-center space-x-2 transition-all duration-300"
              >
                <Cpu className="w-3.5 h-3.5 text-accent" />
                <span>Get CV PDF</span>
              </a>
            </div>

          </div>

        </div>
      </motion.div>
    </MainLayout>
  );
};

export default ProjectDetails;
