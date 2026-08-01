import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>Luxe</div>
      <ul className={styles.navLinks}>
        <li><a href="/">{t('nav', 'home')}</a></li>
        <li><a href="#services">{t('nav', 'services')}</a></li>
        <li><a href="#about">{t('nav', 'about')}</a></li>
        <li><a href="#gallery">{t('nav', 'gallery')}</a></li>
        <li><a href="#pricing">{t('nav', 'pricing')}</a></li>
        <li><a href="#contact">{t('nav', 'contact')}</a></li>
      </ul>
      <div className={styles.navActions}>
        <button className={styles.langBtn} onClick={toggleLanguage}>
          {language === 'en' ? 'UR' : 'EN'}
        </button>
        <button className={styles.bookBtn}>{t('nav', 'bookBtn')}</button>
      </div>
    </nav>
  );
};

export default Navbar;
