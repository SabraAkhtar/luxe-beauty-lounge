import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FormField.module.css';

const FormField = ({ label, type = 'text', name, value, onChange, error, options, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e) => {
    setIsFocused(false);
  };

  const hasValue = value && value.trim() !== '';
  const isActive = isFocused || hasValue || type === 'date' || type === 'time';

  return (
    <div className={styles.fieldWrapper}>
      <label className={`${styles.label} ${isActive ? styles.activeLabel : ''}`}>
        {label}
      </label>
      
      {type === 'select' ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`${styles.input} ${error ? styles.inputError : ''}`}
        >
          <option value="" disabled>{placeholder || `Select ${label}`}</option>
          {options?.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`${styles.input} ${styles.textarea} ${error ? styles.inputError : ''}`}
          rows={4}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`${styles.input} ${error ? styles.inputError : ''}`}
        />
      )}

      <AnimatePresence>
        {error && (
          <motion.span 
            className={styles.errorMessage}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: [-10, 10, -10, 10, 0] }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.4 }}
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FormField;
