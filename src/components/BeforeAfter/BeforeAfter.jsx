import React from 'react';
import { motion } from 'framer-motion';
import { beforeAfterItems } from '../../data/beforeAfter';
import BeforeAfterCard from './BeforeAfterCard/BeforeAfterCard';
import styles from './BeforeAfter.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const BeforeAfter = () => {
  return (
    <section className={styles.section} id="transformations">
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.span 
            className={styles.smallLabel}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Real Results
          </motion.span>
          <motion.h2 
            className={styles.mainHeading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Before & After Transformations
          </motion.h2>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            See the magic of our expert stylists and premium products. Drag the slider to reveal the stunning transformations.
          </motion.p>
        </div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {beforeAfterItems.map(item => (
            <BeforeAfterCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;
