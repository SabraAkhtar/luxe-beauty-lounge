import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '../../data/services';
import ServiceCard from './ServiceCard/ServiceCard';
import FilterBar from './FilterBar/FilterBar';
import FeatureStrip from './FeatureStrip/FeatureStrip';
import styles from './Services.module.css';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices = useMemo(() => {
    if (activeCategory === 'All') return services;
    return services.filter(service => service.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className={styles.servicesSection}>
      {/* Decorative Background Elements */}
      <div className={styles.blurCircle1} />
      <div className={styles.blurCircle2} />
      <div className={styles.textureOverlay} />
      
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.span 
            className={styles.smallLabel}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Our Premium Services
          </motion.span>
          <motion.h2 
            className={styles.mainHeading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
          >
            Beauty Services Crafted for Perfection
          </motion.h2>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            From luxury hair transformations to bridal makeup, skincare, spa therapies, and nail artistry, every service is delivered with premium products and expert care.
          </motion.p>
        </div>

        <FilterBar 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

        <motion.div 
          className={styles.grid}
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </AnimatePresence>
        </motion.div>

        <FeatureStrip />
      </div>
    </section>
  );
};

export default Services;
