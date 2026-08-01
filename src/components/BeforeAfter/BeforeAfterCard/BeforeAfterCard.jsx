import React from 'react';
import { motion } from 'framer-motion';
import ComparisonSlider from '../ComparisonSlider/ComparisonSlider';
import styles from './BeforeAfterCard.module.css';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60 } }
};

const BeforeAfterCard = ({ item }) => {
  return (
    <motion.div 
      className={styles.card}
      variants={cardVariants}
      whileHover={{ y: -10 }}
    >
      <div className={styles.sliderContainer}>
        <ComparisonSlider 
          beforeImage={item.beforeImage} 
          afterImage={item.afterImage} 
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.description}>{item.description}</p>
      </div>
      <div className={styles.glow} />
    </motion.div>
  );
};

export default BeforeAfterCard;
