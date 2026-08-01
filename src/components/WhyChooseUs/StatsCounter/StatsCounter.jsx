import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { statistics } from '../../../data/about';
import styles from './StatsCounter.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
};

const StatsCounter = () => {
  return (
    <motion.div 
      className={styles.statsStrip}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
    >
      {statistics.map((stat) => (
        <motion.div key={stat.id} className={styles.statItem} variants={itemVariants}>
          <div className={styles.numberWrapper}>
            <span className={styles.number}>{stat.number}</span>
            <span className={styles.suffix}>{stat.suffix}</span>
          </div>
          <span className={styles.label}>{stat.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsCounter;
