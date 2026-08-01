import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.span 
            className={styles.smallLabel}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.span>
          <motion.h2 
            className={styles.mainHeading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Let's Make You Feel Beautiful
          </motion.h2>
        </div>

        <div className={styles.grid}>
          {/* Left: Contact Info */}
          <motion.div 
            className={styles.infoColumn}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
          >
            <div className={styles.infoCard}>
              
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><FiMapPin /></div>
                <div>
                  <h4>Visit Us</h4>
                  <p>123 Luxury Avenue, University Road<br/>Peshawar, Pakistan</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><FiPhone /></div>
                <div>
                  <h4>Call Us</h4>
                  <a href="tel:+923001234567" className={styles.link}>+92 300 123 4567</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><FiMail /></div>
                <div>
                  <h4>Email Us</h4>
                  <a href="mailto:hello@luxebeauty.com" className={styles.link}>hello@luxebeauty.com</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><FiClock /></div>
                <div>
                  <h4>Business Hours</h4>
                  <p>Mon - Sun: 10:00 AM - 9:00 PM</p>
                </div>
              </div>

              <a 
                href="https://wa.me/923001234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
              >
                <FaWhatsapp className={styles.waIcon} />
                Message on WhatsApp
              </a>

            </div>
          </motion.div>

          {/* Right: Google Maps */}
          <motion.div 
            className={styles.mapColumn}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 50, delay: 0.4 }}
          >
            <div className={styles.mapContainer}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105822.75338167389!2d71.46468725!3d34.0150965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917b90f0e79cf%3A0xa816b2637558a412!2sPeshawar%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Luxe Beauty Lounge Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
