import React from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { team } from '../../data/team';
import styles from './Team.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
};

const Team = () => {
  return (
    <section className={styles.section} id="team">
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.span 
            className={styles.smallLabel}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Team
          </motion.span>
          <motion.h2 
            className={styles.mainHeading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Meet Our Beauty Experts
          </motion.h2>
        </div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {team.map((member) => (
            <motion.div key={member.id} className={styles.card} variants={cardVariants}>
              <div className={styles.imageContainer}>
                <img src={member.image} alt={member.name} className={styles.image} loading="lazy" />
                <div className={styles.overlay}>
                  <div className={styles.socials}>
                    <a href="#" aria-label="Instagram"><FiInstagram /></a>
                    <a href="#" aria-label="Twitter"><FiTwitter /></a>
                    <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
                  </div>
                </div>
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.position}>{member.position}</p>
                <div className={styles.details}>
                  <span>{member.experience}</span>
                  <span className={styles.dot}>•</span>
                  <span>{member.specialization}</span>
                </div>
              </div>
              <div className={styles.animatedBorder} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
