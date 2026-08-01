import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Lenis from 'lenis';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <LanguageProvider>
      <ThemeProvider>
        <HelmetProvider>
          {loading ? (
            <LoadingScreen onComplete={() => setLoading(false)} />
          ) : (
            <Router>
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<Home />} />
                  {/* Other routes will go here */}
                </Route>
              </Routes>
            </Router>
          )}
        </HelmetProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
