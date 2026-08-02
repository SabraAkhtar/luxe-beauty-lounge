import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
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

const StatItem = ({ stat }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div ref={ref} className={styles.statItem} variants={itemVariants}>
      <div className={styles.numberWrapper}>
        {isInView ? (
          <CountUp
            end={Number(stat.number)}
            duration={2.5}
            className={styles.number}
          />
        ) : (
          <span className={styles.number}>0</span>
        )}
        <span className={styles.suffix}>{stat.suffix}</span>
      </div>
      <span className={styles.label}>{stat.label}</span>
    </motion.div>
  );
};

const StatsCounter = () => {
  return (
    <motion.div
      className={styles.statsStrip}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
    >
      {statistics.map((stat) => (
        <StatItem key={stat.id} stat={stat} />
      ))}
    </motion.div>
  );
};

export default StatsCounter;
