import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AppRoutes from './routes/AppRoutes';
import Loader from './components/Loader/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets/resume data (1.8s duration)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {/* Animated Loading Entry Screen */}
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      {/* Application Routing */}
      {!isLoading && (
        <AppRoutes />
      )}
    </BrowserRouter>
  );
}

export default App;
