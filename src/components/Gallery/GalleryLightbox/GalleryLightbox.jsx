import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from './GalleryLightbox.module.css';

const GalleryLightbox = ({ image, onClose, onNext, onPrev }) => {
  // useRef for touch coords — stable across renders
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };

    document.addEventListener('keydown', handleKeyDown);
    // Don't hide body scrollbar — just prevent scroll via CSS class
    document.documentElement.classList.add('modal-open');

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.documentElement.classList.remove('modal-open');
    };
  }, [onClose, onNext, onPrev]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchEndX.current - touchStartX.current;
    if (diff < -50 && onNext) onNext(); // swipe left → next
    if (diff > 50 && onPrev) onPrev();  // swipe right → prev
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
