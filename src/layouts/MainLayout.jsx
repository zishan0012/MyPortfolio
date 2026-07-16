import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const MainLayout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scroll position on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-dark-bg text-white flex flex-col justify-between relative overflow-x-hidden selection:bg-primary/30 selection:text-accent">
      {/* Decorative Premium Glow Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-primary/10 blur-[80px] md:blur-[120px] pointer-events-none animate-blob z-0"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[350px] md:w-[700px] h-[350px] md:h-[700px] rounded-full bg-secondary/8 blur-[90px] md:blur-[130px] pointer-events-none animate-blob-reverse z-0"></div>
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[250px] md:w-[500px] h-[250px] md:h-[500px] rounded-full bg-accent/5 blur-[70px] md:blur-[100px] pointer-events-none animate-blob z-0"></div>

      <Navbar />
      
      <main className="flex-grow w-full relative z-10 pt-20">
        {children}
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default MainLayout;
