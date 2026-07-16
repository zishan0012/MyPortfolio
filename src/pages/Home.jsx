import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Education from '../components/Education/Education';
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </motion.div>
    </MainLayout>
  );
};

export default Home;
