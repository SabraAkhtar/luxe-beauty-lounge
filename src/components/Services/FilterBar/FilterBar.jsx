import React from 'react';
import { motion } from 'framer-motion';
import styles from './FilterBar.module.css';

const categories = ['All', 'Hair', 'Makeup', 'Skin', 'Nails', 'Spa'];

const FilterBar = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className={styles.filterContainer}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`${styles.filterBtn} ${activeCategory === category ? styles.active : ''}`}
        >
          {category}
          {activeCategory === category && (
            <motion.div
              layoutId="activeFilterIndicator"
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

export default FilterBar;
