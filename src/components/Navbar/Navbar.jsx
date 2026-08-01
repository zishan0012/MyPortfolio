import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: 'hero' },
  { name: 'About', href: 'about' },
  { name: 'Skills', href: 'skills' },
  { name: 'Experience', href: 'experience' },
  { name: 'Projects', href: 'projects' },
  { name: 'Education', href: 'education' },
  { name: 'Contact', href: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll detection to add darker background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer to highlight active link
  useEffect(() => {
    if (location.pathname !== '/') return;

    const observers = [];
    navLinks.forEach((link) => {
      const el = document.getElementById(link.href);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(link.href);
          }
        },
        { rootMargin: '-30% 0px -60% 0px' } // Highlight when section occupies middle viewport
      );
      observer.observe(el);
      observers.push({ observer, el });
    });

    return () => {
      observers.forEach(({ observer, el }) => observer.unobserve(el));
    };
  }, [location.pathname]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname !== '/') {
      // If not on home page, navigate home first, then scroll
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-45 transition-all duration-300 ${scrolled
          ? 'py-4 bg-dark-bg/85 backdrop-blur-md border-b border-white/5 shadow-lg'
          : 'py-6 bg-transparent border-b border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, 'hero')}
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center font-display font-extrabold text-lg text-white shadow-md shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
              Z
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-accent transition-colors duration-300">
              <span className="text-primary">Portfolio</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href && location.pathname === '/';
              return (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 ${isActive
                    ? 'text-accent bg-white/5 shadow-sm border border-white/5'
                    : 'text-gray-400 hover:text-white hover:bg-white/3'
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Call To Action button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-primary to-secondary hover:brightness-110 active:scale-95 shadow-md shadow-primary/20 hover:shadow-primary/30 flex items-center space-x-1 transition-all duration-300"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none transition-colors duration-200"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          >
            {/* Drawer Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-dark-bg/95 backdrop-blur-xl border-l border-white/10 p-6 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                  <span className="font-display font-bold text-lg text-white">
                    Navigation
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href && location.pathname === '/';
                    return (
                      <a
                        key={link.href}
                        href={`#${link.href}`}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${isActive
                          ? 'text-accent bg-white/5 border border-white/10 pl-6'
                          : 'text-gray-400 hover:text-white hover:bg-white/3'
                          }`}
                      >
                        {link.name}
                      </a>
                    );
                  })}
                </div>
              </div>

              <div>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="w-full py-4 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-primary to-secondary hover:brightness-110 active:scale-95 shadow-md shadow-primary/20 flex items-center justify-center space-x-2 transition-all duration-300"
                >
                  <span>Let's Connect</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
