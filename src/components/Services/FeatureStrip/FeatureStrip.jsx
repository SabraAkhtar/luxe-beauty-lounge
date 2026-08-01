import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiDroplet, FiShield, FiHeart } from 'react-icons/fi';
import styles from './FeatureStrip.module.css';

const features = [
  { id: 1, icon: FiAward, text: 'Certified Experts' },
  { id: 2, icon: FiDroplet, text: 'Premium Products' },
  { id: 3, icon: FiShield, text: 'Hygienic Environment' },
  { id: 4, icon: FiHeart, text: 'Personalized Care' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.4 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } }
};

const FeatureStrip = () => {
  return (
    <motion.div 
      className={styles.featureStrip}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
    >
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <motion.div 
            key={feature.id} 
            className={styles.featureItem}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <div className={styles.iconWrapper}>
              <Icon className={styles.icon} />
            </div>
            <span className={styles.text}>{feature.text}</span>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default FeatureStrip;
