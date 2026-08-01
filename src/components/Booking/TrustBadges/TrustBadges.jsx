import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import styles from './TrustBadges.module.css';

const badges = [
  'Certified Professionals',
  'Premium Products',
  'Secure Booking',
  '8,000+ Happy Clients'
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const badgeVariants = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } }
};

const TrustBadges = () => {
  return (
    <motion.div 
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {badges.map((badge, index) => (
        <motion.div key={index} className={styles.badge} variants={badgeVariants}>
          <FiCheckCircle className={styles.icon} />
          <span>{badge}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TrustBadges;
