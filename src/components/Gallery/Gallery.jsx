import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { galleryItems } from '../../data/gallery';
import GalleryFilter from './GalleryFilter/GalleryFilter';
import GalleryGrid from './GalleryGrid/GalleryGrid';
import GalleryLightbox from './GalleryLightbox/GalleryLightbox';
import styles from './Gallery.module.css';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return galleryItems;
    return galleryItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  };

  return (
    <section className={styles.gallerySection} id="gallery">
      {/* Decorative Background Elements */}
      <div className={styles.meshGradient} />
      <div className={styles.goldGlow} />

      <div className={styles.container}>
        <div className={styles.header}>
          <motion.span 
            className={styles.smallLabel}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Gallery
          </motion.span>
          <motion.h2 
            className={styles.mainHeading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Beauty Transformations That Speak for Themselves
          </motion.h2>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Browse our collection of luxury hairstyles, bridal makeup, skincare treatments, spa experiences, nail artistry, and premium beauty transformations.
          </motion.p>
        </div>

        <GalleryFilter 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

        <GalleryGrid 
          items={filteredItems} 
          onImageClick={handleImageClick} 
        />
      </div>

      <GalleryLightbox 
        image={selectedImage} 
        onClose={handleCloseLightbox} 
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};

export default Gallery;
