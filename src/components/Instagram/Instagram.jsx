import React from 'react';
import { motion } from 'framer-motion';
import { FiInstagram } from 'react-icons/fi';
import { instagramPosts } from '../../data/instagram';
import styles from './Instagram.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const Instagram = () => {
  return (
    <section className={styles.section} id="instagram">
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2 
            className={styles.mainHeading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Follow Our Journey
          </motion.h2>
          <motion.a 
            href="#" 
            className={styles.followBtn}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <FiInstagram /> @LuxeBeautyLounge
          </motion.a>
        </div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {instagramPosts.map((post) => (
            <motion.a 
              key={post.id} 
              href={post.link} 
              className={styles.postItem}
              variants={itemVariants}
            >
              <img src={post.image} alt="Instagram post" className={styles.image} loading="lazy" />
              <div className={styles.overlay}>
                <FiInstagram className={styles.icon} />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Instagram;
