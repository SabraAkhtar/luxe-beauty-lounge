import React from 'react';
import { motion } from 'framer-motion';
import styles from './GalleryFilter.module.css';
import { galleryCategories } from '../../../data/gallery';

const GalleryFilter = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className={styles.filterContainer}>
      {galleryCategories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`${styles.filterBtn} ${activeCategory === category ? styles.active : ''}`}
        >
          {category}
          {activeCategory === category && (
            <motion.div
              layoutId="galleryFilterIndicator"
              className={styles.activeIndicator}
              initial={false}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default GalleryFilter;
