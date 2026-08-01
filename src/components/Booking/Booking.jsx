import React from 'react';
import { motion } from 'framer-motion';
import BookingForm from './BookingForm/BookingForm';
import WhatsAppBooking from './WhatsAppBooking/WhatsAppBooking';
import TrustBadges from './TrustBadges/TrustBadges';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Booking.module.css';

const Booking = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.section} id="booking">
      {/* Background Elements */}
      <div className={styles.meshGradient} />
      <div className={styles.blurCircle1} />
      <div className={styles.blurCircle2} />

      <div className={styles.container}>
        <div className={styles.header}>
          <motion.span 
            className={styles.smallLabel}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Book Appointment
          </motion.span>
          <motion.h2 
            className={styles.mainHeading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t('booking', 'title')}
          </motion.h2>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Schedule your visit using the form below, or reach out to us directly for immediate assistance.
          </motion.p>
        </div>

        <div className={styles.layoutGrid}>
          <motion.div 
            className={styles.leftColumn}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: 'spring', stiffness: 50, delay: 0.3 }}
          >
            <BookingForm />
          </motion.div>

          <div className={styles.rightColumn}>
            <WhatsAppBooking />
            <TrustBadges />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
