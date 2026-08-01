import React from 'react';
import { motion } from 'framer-motion';
import { pricingPlans } from '../../data/pricing';
import PricingCard from './PricingCard/PricingCard';
import styles from './Pricing.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const Pricing = () => {
  return (
    <section className={styles.section} id="pricing">
      {/* Background Elements */}
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
            Pricing
          </motion.span>
          <motion.h2 
            className={styles.mainHeading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Luxury Beauty Packages for Every Occasion
          </motion.h2>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Choose from our carefully designed beauty packages, crafted to deliver exceptional results with premium products and expert care.
          </motion.p>
        </div>

        <motion.div 
          className={styles.cardsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {pricingPlans.map(plan => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
