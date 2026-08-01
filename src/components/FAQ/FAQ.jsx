import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { faqs } from '../../data/faqs';
import styles from './FAQ.module.css';

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.span 
            className={styles.smallLabel}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            FAQ
          </motion.span>
          <motion.h2 
            className={styles.mainHeading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className={styles.accordion}>
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div 
                key={faq.id}
                className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05 }}
              >
                <button 
                  className={styles.questionBtn} 
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={styles.iconWrapper}
                  >
                    <FiChevronDown />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      className={styles.answerContainer}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className={styles.answerContent}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
