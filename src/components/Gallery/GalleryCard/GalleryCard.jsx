import React from 'react';
import { motion } from 'framer-motion';
import { FiZoomIn } from 'react-icons/fi';
import styles from './GalleryCard.module.css';

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } }
};

const GalleryCard = ({ item, onClick }) => {
  return (
    <motion.div 
      className={styles.card}
      variants={itemVariants}
      layout
      whileHover="hover"
      onClick={() => onClick(item)}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => { if (e.key === 'Enter') onClick(item); }}
    >
      <div className={styles.imageContainer}>
        <img 
          src={item.image} 
          alt={item.title} 
          loading="lazy" 
          className={styles.image} 
        />
        <motion.div 
          className={styles.overlay}
          variants={{
            hover: { opacity: 1 }
          }}
        >
          <div className={styles.zoomIconWrapper}>
            <FiZoomIn className={styles.zoomIcon} />
          </div>
          <div className={styles.details}>
            <span className={styles.badge}>{item.category}</span>
            <h3 className={styles.title}>{item.title}</h3>
          </div>
        </motion.div>
      </div>
      <div className={styles.glow} />
    </motion.div>
  );
};

export default GalleryCard;
