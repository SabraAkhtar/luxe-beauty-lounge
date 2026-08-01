import React, { useEffect, useState } from 'react';
import styles from './ScrollProgress.module.css';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.scrollProgressContainer}>
      <div 
        className={styles.scrollProgressIndicator} 
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
    </div>
  );
};

export default ScrollProgress;
