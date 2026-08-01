import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ServiceCard.module.css';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 12 } }
};

const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  const [imageSrc, setImageSrc] = useState(service.fallbackImage || service.image);
  const fallbackImage = service.fallbackImage || service.image;

  return (
    <motion.div 
      className={styles.card}
      variants={itemVariants}
      whileHover="hover"
    >
      <div className={styles.imageContainer}>
        <img 
          src={imageSrc} 
          alt={service.title} 
          loading="lazy" 
          className={styles.image}
          onError={() => {
            if (imageSrc !== fallbackImage) {
              setImageSrc(fallbackImage);
            }
          }}
        />
        <div className={styles.overlay}>
          <div className={styles.priceTag}>Starts at {service.price}</div>
        </div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <Icon className={styles.icon} />
          </div>
          <span className={styles.duration}>{service.duration}</span>
        </div>
        
        <h3 className={styles.title}>{service.title}</h3>
        <p className={styles.description}>{service.description}</p>
        
        <motion.button 
          className={styles.bookBtn}
          variants={{
            hover: { scale: 1.05, backgroundColor: 'var(--primary-color)' }
          }}
        >
          Book Now
        </motion.button>
      </div>
      
      {/* Decorative hover border */}
      <motion.div 
        className={styles.borderGlow}
        variants={{
          hover: { opacity: 1 }
        }}
      />
    </motion.div>
  );
};

export default ServiceCard;
