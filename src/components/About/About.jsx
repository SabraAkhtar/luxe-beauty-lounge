import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { aboutFeatures } from '../../data/about';
import ExperienceBadge from './ExperienceBadge/ExperienceBadge';
import { FiArrowRight } from 'react-icons/fi';
import styles from './About.module.css';

const About = () => {
  const imageRef = useRef(null);
  
  // Mouse parallax setup
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        
        <div className={styles.leftColumn} ref={imageRef}>
          <motion.div 
            className={styles.imageContainer}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className={styles.parallaxWrapper}
              style={{ y: yParallax }}
            >
              <img 
                src="https://images.unsplash.com/photo-1521590832167-7bfc17484d20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Luxury Salon Interior" 
                className={styles.mainImage}
                loading="lazy"
              />
            </motion.div>
            
            <div className={styles.decorativeBorder} />
            <ExperienceBadge />
          </motion.div>
        </div>

        <div className={styles.rightColumn}>
          <motion.span 
            className={styles.smallLabel}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About Luxe Beauty Lounge
          </motion.span>
          
          <motion.h2 
            className={styles.mainHeading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Beauty, Luxury & Confidence — All Under One Roof
          </motion.h2>
          
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Luxe Beauty Lounge is one of Peshawar's premium beauty destinations, offering luxury salon and spa services with highly trained professionals, modern techniques, and premium international products. Our mission is to help every client look and feel their absolute best in a relaxing, hygienic, and elegant environment.
          </motion.p>
          
          <div className={styles.featureList}>
            {aboutFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={feature.id} 
                  className={styles.featureItem}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  whileHover={{ x: 10, color: 'var(--secondary-color)' }}
                >
                  <div className={styles.iconWrapper}>
                    <Icon />
                  </div>
                  <span>{feature.text}</span>
                </motion.div>
              );
            })}
          </div>
          
          <motion.button 
            className={styles.ctaBtn}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            whileHover="hover"
          >
            <span className={styles.btnText}>Learn More</span>
            <motion.div 
              className={styles.btnIcon}
              variants={{
                hover: { x: 5 }
              }}
            >
              <FiArrowRight />
            </motion.div>
            <motion.div 
              className={styles.btnGlow}
              variants={{
                hover: { opacity: 1, scale: 1.1 }
              }}
            />
          </motion.button>
        </div>
        
      </div>
    </section>
  );
};

export default About;
