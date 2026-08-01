import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryCard from '../GalleryCard/GalleryCard';
import styles from './GalleryGrid.module.css';

const GalleryGrid = ({ items, onImageClick }) => {
  return (
    <motion.div 
      className={styles.gridContainer}
      layout
    >
      <AnimatePresence mode="popLayout">
        {items.map((item) => (
          <GalleryCard key={item.id} item={item} onClick={onImageClick} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default GalleryGrid;
