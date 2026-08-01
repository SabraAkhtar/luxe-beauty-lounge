import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiClock } from 'react-icons/fi';
import styles from './PricingCard.module.css';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
};

const PricingCard = ({ plan }) => {
  return (
    <motion.div 
      className={`${styles.card} ${plan.isPopular ? styles.popularCard : ''}`}
      variants={cardVariants}
      whileHover={{ y: -15 }}
    >
      {plan.isPopular && (
        <div className={styles.popularBadge}>
          ⭐ Most Popular
        </div>
      )}
      
      <div className={styles.cardHeader}>
        <h3 className={styles.title}>{plan.title}</h3>
        <div className={styles.priceContainer}>
          <span className={styles.currency}>PKR</span>
          <span className={styles.price}>{plan.price}</span>
        </div>
        <div className={styles.duration}>
          <FiClock className={styles.durationIcon} />
          <span>{plan.duration}</span>
        </div>
      </div>

      <div className={styles.divider} />

      <ul className={styles.featureList}>
        {plan.features.map((feature, index) => (
          <li key={index} className={styles.featureItem}>
            <div className={styles.checkIconWrapper}>
              <FiCheck />
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a href="#booking" className={`${styles.ctaBtn} ${plan.isPopular ? styles.popularBtn : ''}`}>
        Book Appointment
        <div className={styles.btnGlow} />
      </a>
      
      <div className={styles.glow} />
    </motion.div>
  );
};

export default PricingCard;
