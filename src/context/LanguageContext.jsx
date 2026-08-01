import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('luxe-language');
    if (savedLang && ['en', 'ur'].includes(savedLang)) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ur' : 'en';
    setLanguage(newLang);
    localStorage.setItem('luxe-language', newLang);
    document.documentElement.dir = newLang === 'ur' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const t = (section, key) => {
    return translations[language][section][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
