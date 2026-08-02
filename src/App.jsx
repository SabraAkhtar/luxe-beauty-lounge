import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [loading, setLoading] = useState(true);

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
