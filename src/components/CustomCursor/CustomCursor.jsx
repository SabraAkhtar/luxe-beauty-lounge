import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Only show on desktop
    const checkDesktop = () => setIsDesktop(window.innerWidth > 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      // Check if hovering over clickable elements
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.tagName.toLowerCase() === 'input' ||
        target.tagName.toLowerCase() === 'textarea' ||
        target.classList.contains('swiper-button-next') ||
        target.classList.contains('swiper-button-prev')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    if (isDesktop) {
      window.addEventListener('mousemove', updateMousePosition);
      window.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      window.removeEventListener('resize', checkDesktop);
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className={styles.cursorDot}
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />
      <motion.div
        className={styles.cursorOutline}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
          borderColor: isHovering ? 'rgba(212, 175, 55, 0)' : 'rgba(212, 175, 55, 0.8)',
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
      />
    </>
  );
};

export default CustomCursor;
