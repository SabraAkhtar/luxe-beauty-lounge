import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlay } from 'react-icons/fi';
import VideoModal from './VideoModal/VideoModal';
import styles from './VideoShowcase.module.css';

const VideoShowcase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.section} id="video-tour">
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.bannerWrapper}>
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            alt="Luxe Salon Tour" 
            className={styles.bannerImage}
            loading="lazy"
          />
          <div className={styles.overlay}>
            <motion.button
              className={styles.playButton}
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Play Salon Tour Video"
            >
              <FiPlay className={styles.playIcon} />
              <div className={styles.pulseRing} />
              <div className={styles.pulseRing2} />
            </motion.button>
            <div className={styles.textContainer}>
              <span className={styles.smallLabel}>Take a Tour</span>
              <h2 className={styles.title}>Experience The Luxury</h2>
            </div>
          </div>
        </div>
      </motion.div>

      <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default VideoShowcase;
