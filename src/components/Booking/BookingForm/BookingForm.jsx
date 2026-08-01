import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiLoader } from 'react-icons/fi';
import FormField from '../FormField/FormField';
import BookingSummary from '../BookingSummary/BookingSummary';
import styles from './BookingForm.module.css';
import { pricingPlans } from '../../../data/pricing';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    package: '',
    date: '',
    time: '',
    request: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone format';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.date) {
      newErrors.date = 'Please select a date';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Date cannot be in the past';
      }
    }
    
    if (!formData.time) newErrors.time = 'Please select a time';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleProceedToSummary = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowSummary(true);
    }
  };

  const handleConfirm = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSummary(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          fullName: '', phone: '', email: '', service: '',
          package: '', date: '', time: '', request: ''
        });
      }, 5000);
    }, 2000);
  };

  const serviceOptions = [
    { value: 'hair', label: 'Hair Styling & Color' },
    { value: 'makeup', label: 'Professional Makeup' },
    { value: 'spa', label: 'Spa & Massage' },
    { value: 'facial', label: 'Facial & Skincare' },
    { value: 'nails', label: 'Nail Artistry' }
  ];

  const packageOptions = pricingPlans.map(plan => ({
    value: plan.id,
    label: `${plan.title} (PKR ${plan.price})`
  }));

  return (
    <div className={styles.formContainer}>
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div 
            key="success"
            className={styles.successState}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
            >
              <FiCheckCircle className={styles.successIcon} />
            </motion.div>
            <h3>Booking Confirmed!</h3>
            <p>Our consultant will contact you shortly.</p>
          </motion.div>
        ) : showSummary ? (
          <BookingSummary 
            key="summary"
            formData={formData} 
            onConfirm={handleConfirm} 
            onBack={() => setShowSummary(false)} 
            isSubmitting={isSubmitting} 
          />
        ) : (
          <motion.form 
            key="form"
            onSubmit={handleProceedToSummary}
            className={styles.form}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={styles.formGrid}>
              <FormField label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} error={errors.fullName} />
              <FormField label="Phone Number" type="tel" name="phone" value={formData.phone} onChange={handleChange} error={errors.phone} />
              <FormField label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} error={errors.email} />
              <FormField label="Service" type="select" name="service" value={formData.service} onChange={handleChange} error={errors.service} options={serviceOptions} />
              <FormField label="Package (Optional)" type="select" name="package" value={formData.package} onChange={handleChange} options={packageOptions} placeholder="Select a Package" />
              <div className={styles.dateTimeRow}>
                <FormField label="Preferred Date" type="date" name="date" value={formData.date} onChange={handleChange} error={errors.date} />
                <FormField label="Preferred Time" type="time" name="time" value={formData.time} onChange={handleChange} error={errors.time} />
              </div>
            </div>
            
            <div className={styles.fullWidth}>
              <FormField label="Special Request" type="textarea" name="request" value={formData.request} onChange={handleChange} />
            </div>

            <motion.button 
              type="submit"
              className={styles.submitBtn}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              <span className={styles.btnText}>
                Review Booking
              </span>
              {!isSubmitting && <div className={styles.btnRipple} />}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BookingForm;
