import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import styles from './Footer.module.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Brand Column */}
          <div className={styles.column}>
            <h3 className={styles.brand}>Luxe Beauty Lounge</h3>
            <p className={styles.description}>
              Peshawar's premier destination for luxury beauty, skincare, and wellness treatments. Experience elegance redefined.
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="Facebook"><FiFacebook /></a>
              <a href="#" aria-label="Instagram"><FiInstagram /></a>
              <a href="#" aria-label="Twitter"><FiTwitter /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.heading}>Quick Links</h4>
            <ul className={styles.links}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.column}>
            <h4 className={styles.heading}>Our Services</h4>
            <ul className={styles.links}>
              <li><a href="#">Bridal Makeup</a></li>
              <li><a href="#">Hair Styling & Color</a></li>
              <li><a href="#">Luxury Facials</a></li>
              <li><a href="#">Spa Retreat</a></li>
              <li><a href="#">Nail Artistry</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className={styles.column}>
            <h4 className={styles.heading}>Newsletter</h4>
            <p className={styles.newsletterDesc}>Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" required className={styles.input} />
              <button type="submit" className={styles.subscribeBtn}>Subscribe</button>
            </form>
          </div>

        </div>

        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} Luxe Beauty Lounge. All Rights Reserved.</p>
          <button onClick={scrollToTop} className={styles.topBtn} aria-label="Scroll to top">
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
