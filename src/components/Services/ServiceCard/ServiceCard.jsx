import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ServiceCard.module.css';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 12 } }
};

const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      className={styles.card}
      variants={itemVariants}
      whileHover="hover"
    >
      {/* Full-card background image */}
      <div className={styles.imageContainer}>
        {!imgError ? (
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            className={styles.image}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={styles.imageFallback}>
            <Icon className={styles.fallbackIcon} />
          </div>
        )}
      </div>

      {/* Dark gradient overlay */}
      <div className={styles.overlay} />

      {/* Content on top of image */}
      <div className={styles.content}>
        {/* Price tag — top left */}
        <div className={styles.priceTag}>Starts at {service.price}</div>

        {/* Bottom section */}
        <div className={styles.bottom}>
          <div className={styles.header}>
            <div className={styles.iconWrapper}>
              <Icon />
            </div>
            <span className={styles.duration}>{service.duration}</span>
          </div>
          <h3 className={styles.title}>{service.title}</h3>
          <p className={styles.description}>{service.description}</p>
          <button className={styles.bookBtn}>Book Now</button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
