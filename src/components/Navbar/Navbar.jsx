import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on link click
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>Luxe</div>

      {/* Desktop Links */}
      <ul className={styles.navLinks}>
        <li><a href="#home">{t('nav', 'home')}</a></li>
        <li><a href="#services">{t('nav', 'services')}</a></li>
        <li><a href="#about">{t('nav', 'about')}</a></li>
        <li><a href="#gallery">{t('nav', 'gallery')}</a></li>
        <li><a href="#pricing">{t('nav', 'pricing')}</a></li>
        <li><a href="#contact">{t('nav', 'contact')}</a></li>
      </ul>

      <div className={styles.navActions}>
        <button className={styles.langBtn} onClick={toggleLanguage} aria-label="Toggle Language">
          {language === 'en' ? 'UR' : 'EN'}
        </button>
        <button className={styles.bookBtn}>{t('nav', 'bookBtn')}</button>

        {/* Hamburger button — mobile only */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul>
          <li><a href="#home" onClick={handleLinkClick}>{t('nav', 'home')}</a></li>
          <li><a href="#services" onClick={handleLinkClick}>{t('nav', 'services')}</a></li>
          <li><a href="#about" onClick={handleLinkClick}>{t('nav', 'about')}</a></li>
          <li><a href="#gallery" onClick={handleLinkClick}>{t('nav', 'gallery')}</a></li>
          <li><a href="#pricing" onClick={handleLinkClick}>{t('nav', 'pricing')}</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>{t('nav', 'contact')}</a></li>
        </ul>
        <button className={styles.bookBtnMobile} onClick={handleLinkClick}>
          {t('nav', 'bookBtn')}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
