import React from 'react';
import { motion } from 'framer-motion';
import styles from './ExperienceBadge.module.css';

const ExperienceBadge = () => {
  return (
    <motion.div 
      className={styles.badge}
      animate={{ 
        y: [0, -15, 0],
      }}
      transition={{ 
        duration: 4, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    >
      <div className={styles.content}>
        <span className={styles.number}>15+</span>
        <span className={styles.text}>Years<br/>Experience</span>
      </div>
    </motion.div>
  );
};

export default ExperienceBadge;
