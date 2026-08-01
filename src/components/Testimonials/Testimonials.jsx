import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Keyboard } from 'swiper/modules';
import { FiStar } from 'react-icons/fi';
import { MdVerified } from 'react-icons/md';
import { testimonials } from '../../data/testimonials';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './Testimonials.module.css';

const Testimonials = () => {
  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.span 
            className={styles.smallLabel}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Client Reviews
          </motion.span>
          <motion.h2 
            className={styles.mainHeading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Show authentic-looking client feedback in a luxury carousel.
          </motion.p>
        </div>

        <motion.div 
          className={styles.carouselWrapper}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation, Keyboard]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            keyboard={{ enabled: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className={styles.swiper}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <img src={testimonial.image} alt={testimonial.name} className={styles.avatar} loading="lazy" />
                    <div className={styles.clientInfo}>
                      <h4 className={styles.clientName}>
                        {testimonial.name}
                        {testimonial.isVerified && <MdVerified className={styles.verifiedIcon} title="Verified Client" />}
                      </h4>
                      <span className={styles.service}>{testimonial.service}</span>
                    </div>
                  </div>
                  
                  <div className={styles.rating}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className={styles.starIcon} fill="currentColor" />
                    ))}
                  </div>
                  
                  <p className={styles.reviewText}>"{testimonial.review}"</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
