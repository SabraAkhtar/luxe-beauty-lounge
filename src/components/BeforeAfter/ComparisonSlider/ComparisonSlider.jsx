import React, { useState, useRef, useEffect, useCallback } from 'react';
import styles from './ComparisonSlider.module.css';

const ComparisonSlider = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleMouseMove = useCallback((e) => handleMove(e.clientX), [handleMove]);
  const handleMouseUp = useCallback(() => setIsDragging(false), []);
  const handleTouchMove = useCallback((e) => handleMove(e.touches[0].clientX), [handleMove]);
  const handleTouchEnd = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  return (
    <div
      className={styles.container}
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      <div className={styles.imageContainer}>
        {/* After Image (Background) */}
        <img src={afterImage} alt="After" className={styles.image} loading="lazy" />
        <span className={styles.labelAfter}>After</span>

        {/* Before Image (Foreground, clipped) */}
        <div
          className={styles.beforeWrapper}
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img src={beforeImage} alt="Before" className={styles.image} loading="lazy" />
          <span className={styles.labelBefore}>Before</span>
        </div>
      </div>

      <div
        className={styles.sliderLine}
        style={{ left: `${sliderPosition}%` }}
      >
        <div className={styles.sliderButton}>
          <div className={styles.sliderArrowLeft} />
          <div className={styles.sliderArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default ComparisonSlider;
