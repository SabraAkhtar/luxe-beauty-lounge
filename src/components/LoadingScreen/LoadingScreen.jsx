import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './LoadingScreen.module.css';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer;
    let fallbackTimer;

    const completeLoading = () => {
      clearInterval(timer);
      clearTimeout(fallbackTimer);
      onComplete?.();
    };

    timer = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + 2, 100);

        if (next >= 100) {
          completeLoading();
        }

        return next;
      });
    }, 30);

    fallbackTimer = setTimeout(() => {
      completeLoading();
    }, 1800);

    return () => {
      clearInterval(timer);
      clearTimeout(fallbackTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div 
        className={styles.loadingScreen}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className={styles.content}>
          <motion.h1 
            className={styles.logo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Luxe
          </motion.h1>
          <div className={styles.progressBarContainer}>
            <motion.div 
              className={styles.progressBar}
              style={{ width: `${progress}%` }}
              layout
            />
          </div>
          <p className={styles.percentage}>{progress}%</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
