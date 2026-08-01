import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from './GalleryLightbox.module.css';

const GalleryLightbox = ({ image, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };

    document.addEventListener('keydown', handleKeyDown);
    // Focus trapping and preventing scroll on body
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, onNext, onPrev]);

  // Touch handlers for swipe
  let touchStartX = 0;
  let touchEndX = 0;
  
  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };
  
  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  };
  
  const handleSwipe = () => {
    if (touchEndX < touchStartX - 50) {
      if (onNext) onNext(); // Swipe left
    }
    if (touchEndX > touchStartX + 50) {
      if (onPrev) onPrev(); // Swipe right
    }
  };

  return (
    <AnimatePresence>
      {image && (
        <motion.div 
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <button 
            className={styles.closeBtn} 
            onClick={onClose}
            aria-label="Close Lightbox"
          >
            <FiX />
          </button>
          
          {onPrev && (
            <button 
              className={`${styles.navBtn} ${styles.prevBtn}`} 
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              aria-label="Previous Image"
            >
              <FiChevronLeft />
            </button>
          )}

          <motion.div 
            className={styles.imageContainer}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img src={image.image} alt={image.title} className={styles.image} />
            <div className={styles.caption}>
              <h3>{image.title}</h3>
              <span>{image.category}</span>
            </div>
          </motion.div>

          {onNext && (
            <button 
              className={`${styles.navBtn} ${styles.nextBtn}`} 
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              aria-label="Next Image"
            >
              <FiChevronRight />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GalleryLightbox;
