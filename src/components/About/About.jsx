import React from 'react';

import { motion as motionFramer } from 'framer-motion';
import { Terminal, Award, Briefcase, Cpu, GraduationCap, Download } from 'lucide-react';
import { statsData } from '../../data/experience';

const About = () => {
  const codeString = `const developer = {
  name: "Zishan Ahmad",
  role: "Frontend / MERN Stack Developer",
  location: "Muzaffarpur, Bihar",
  experience: "1+ Year",
  coreStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
  passion: "AI-Driven Web Integrations",
  philosophy: "Write clean, scalable, modular code"
};`;

  const statIcons = [
    <Cpu className="w-5 h-5 text-accent" />,
    <Briefcase className="w-5 h-5 text-accent" />,
    <Award className="w-5 h-5 text-accent" />,
    <GraduationCap className="w-5 h-5 text-accent" />
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motionFramer.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-accent mb-2"
          >
            About Me
          </motionFramer.h3>
          <motionFramer.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-2"
          >
            A Glimpse Into My Coding World
          </motionFramer.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Code Mockup (Premium IDE Visual) */}
          <motionFramer.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 w-full"
          >
            <div className="w-full rounded-2xl border border-white/10 bg-dark-bg/60 shadow-2xl overflow-hidden glassmorphism">
              {/* Window Header */}
              <div className="bg-white/3 border-b border-white/5 px-4 py-3.5 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#EF4444] inline-block opacity-80"></span>
                  <span className="w-3.5 h-3.5 rounded-full bg-[#F59E0B] inline-block opacity-80"></span>
                  <span className="w-3.5 h-3.5 rounded-full bg-[#10B981] inline-block opacity-80"></span>
                </div>
                <div className="flex items-center space-x-1.5 text-xs text-gray-500 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-gray-400" />
                  <span>zishan.js</span>
                </div>
                <div className="w-12"></div> {/* Spacing spacer */}
              </div>

              {/* Code Panel */}
              <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-left text-gray-300">
                <pre className="select-none">
                  {codeString.split('\n').map((line, idx) => {
                    // Simple highlighting matches
                    let highlighted = line;
                    if (line.includes('const')) {
                      highlighted = highlighted.replace('const', '<span class="text-primary font-semibold">const</span>');
                    }
                    if (line.includes('developer')) {
                      highlighted = highlighted.replace('developer', '<span class="text-white font-semibold">developer</span>');
                    }
                    if (line.includes(':')) {
                      const parts = highlighted.split(':');
                      parts[0] = `<span class="text-accent">${parts[0]}</span>`;
                      highlighted = parts.join(':');
                    }
                    return (
                      <div key={idx} className="flex">
                        <span className="text-gray-600 text-right pr-4 select-none w-6 inline-block">{idx + 1}</span>
                        <code dangerouslySetInnerHTML={{ __html: highlighted }} />
                      </div>
                    );
                  })}
                </pre>
              </div>
            </div>
          </motionFramer.div>

          {/* Right Column: Bio Summary & Stats */}
          <motionFramer.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col space-y-6 text-left"
          >
            <h4 className="font-display font-bold text-xl sm:text-2xl text-white">
              Who is Zishan Ahmad?
            </h4>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              I am a dedicated MERN Stack Developer with a strong academic foundation in Computer Science and Engineering. I specialize in building responsive, feature-rich web applications that blend modern design principles with optimized backends.
            </p>

            <p className="text-gray-400 text-sm leading-relaxed">
              With one year experience and multiple developer internships, I have refined my skills in full-stack architecture, building dynamic SEO and PPC calculators, and integrating AI engines. I enjoy crafting modular React components and scaling RESTful APIs while strictly adhering to mobile-first layout methodologies.
            </p>

            {/* Quick Specs / Location details */}
            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/5">
              <div>
                <span className="text-sm font-medium text-gray-500 block mb-1">Location</span>
                <span className="text-sm font-semibold text-white">Muzaffarpur, Bihar</span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500 block mb-1">Degree</span>
                <span className="text-sm font-semibold text-white">B.Tech in Computer Science</span>
              </div>
            </div>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {statsData.map((stat, index) => (
                <motionFramer.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="p-4 rounded-xl border border-white/5 bg-white/3 flex items-center space-x-3.5 glassmorphism-light hover:border-primary/20 transition-all duration-300 shadow-sm"
                >
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    {statIcons[index] || <Cpu className="w-5 h-5 text-accent" />}
                  </div>
                  <div>
                    <h5 className="font-display font-extrabold text-lg sm:text-xl text-white leading-none">
                      {stat.value}
                      {stat.suffix && <span className="text-xs font-normal text-gray-400 ml-0.5">{stat.suffix}</span>}
                    </h5>
                    <p className="text-xs text-gray-400 mt-1 font-medium">{stat.label}</p>
                  </div>
                </motionFramer.div>
              ))}
            </div>

            {/* Resume button shortcut */}
            <div className="pt-4">
              <a
                href="/Resume-zishan.pdf"
                download="Zishan_Ahmad_Resume.pdf"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-accent hover:text-white transition-colors duration-300"
              >
                <span>Read full resume details</span>
                <Download className="w-4 h-4" />
              </a>
            </div>

          </motionFramer.div>

        </div>

      </div>
    </section>
  );
};

export default About;
