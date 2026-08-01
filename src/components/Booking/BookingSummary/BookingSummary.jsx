import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiUser, FiInfo } from 'react-icons/fi';
import styles from './BookingSummary.module.css';

const BookingSummary = ({ formData, onConfirm, onBack, isSubmitting }) => {
  return (
    <motion.div 
      className={styles.summaryContainer}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <h3 className={styles.heading}>Booking Summary</h3>
      <p className={styles.description}>Please review your appointment details before confirming.</p>
      
      <div className={styles.detailsCard}>
        <div className={styles.detailItem}>
          <FiUser className={styles.icon} />
          <div>
            <span className={styles.label}>Name</span>
            <span className={styles.value}>{formData.fullName}</span>
          </div>
        </div>

        <div className={styles.detailItem}>
          <FiInfo className={styles.icon} />
          <div>
            <span className={styles.label}>Service</span>
            <span className={styles.value}>{formData.service}</span>
          </div>
        </div>

        {formData.package && (
          <div className={styles.detailItem}>
            <FiInfo className={styles.icon} />
            <div>
              <span className={styles.label}>Package</span>
              <span className={styles.value}>{formData.package}</span>
            </div>
          </div>
        )}

        <div className={styles.detailItem}>
          <FiCalendar className={styles.icon} />
          <div>
            <span className={styles.label}>Date</span>
            <span className={styles.value}>{formData.date}</span>
          </div>
        </div>

        <div className={styles.detailItem}>
          <FiClock className={styles.icon} />
          <div>
            <span className={styles.label}>Time</span>
            <span className={styles.value}>{formData.time}</span>
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <button 
          className={styles.backBtn} 
          onClick={onBack}
          disabled={isSubmitting}
        >
          Edit Details
        </button>
        <button 
          className={styles.confirmBtn} 
          onClick={onConfirm}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Processing...' : 'Confirm Booking'}
        </button>
      </div>
    </motion.div>
  );
};

export default BookingSummary;
