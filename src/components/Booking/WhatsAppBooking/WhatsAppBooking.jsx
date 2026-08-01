import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './WhatsAppBooking.module.css';

const WhatsAppBooking = () => {
  const whatsappNumber = '923001234567';
  const defaultMessage = 'Hello! I would like to book an appointment at Luxe Beauty Lounge.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <motion.div 
      className={styles.card}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
    >
      <div className={styles.iconWrapper}>
        <FaWhatsapp className={styles.icon} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>Need a Faster Booking?</h3>
        <p className={styles.description}>Chat directly with our beauty consultant on WhatsApp.</p>
        
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.button}
        >
          Book via WhatsApp
          <div className={styles.btnGlow} />
        </a>
      </div>
    </motion.div>
  );
};

export default WhatsAppBooking;
