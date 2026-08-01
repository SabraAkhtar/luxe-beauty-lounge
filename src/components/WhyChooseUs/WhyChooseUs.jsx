import React from 'react';
import { motion } from 'framer-motion';
import { whyChooseUsCards } from '../../data/about';
import StatsCounter from './StatsCounter/StatsCounter';
import styles from './WhyChooseUs.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 80 } }
};

const WhyChooseUs = () => {
  return (
    <section className={styles.section} id="why-choose-us">
      {/* Decorative Background Elements */}
      <div className={styles.meshGradient} />
      <div className={styles.goldGlow} />
      <div className={styles.abstractShape1} />
      
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.span 
            className={styles.smallLabel}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.span>
          <motion.h2 
            className={styles.mainHeading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Because You Deserve The Best
          </motion.h2>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our experienced beauty professionals combine luxury products, advanced techniques, and exceptional customer service to create unforgettable salon experiences.
          </motion.p>
        </div>

        <motion.div 
          className={styles.cardsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {whyChooseUsCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div 
                key={card.id} 
                className={styles.card}
                variants={cardVariants}
                whileHover="hover"
              >
                <div className={styles.cardContent}>
                  <motion.div 
                    className={styles.iconWrapper}
                    variants={{
                      hover: { y: -5, scale: 1.1, color: 'var(--primary-color)', backgroundColor: 'var(--secondary-color)' }
                    }}
                  >
                    <Icon className={styles.icon} />
                  </motion.div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDescription}>{card.description}</p>
                </div>
                
                {/* Image/Pattern Overlay inside card on hover */}
                <motion.div 
                  className={styles.cardOverlay}
                  variants={{
                    hover: { opacity: 0.05 }
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
        
        <StatsCounter />
      </div>
    </section>
  );
};

export default WhyChooseUs;
