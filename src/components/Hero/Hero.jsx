import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Hero.module.css';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920',
    subtitle: 'Welcome to Luxe Beauty Lounge',
    title: 'Experience Premium Luxury',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1521590832167-7bfc17484d20?auto=format&fit=crop&q=80&w=1920',
    subtitle: 'Professional Services',
    title: 'Discover Your True Elegance',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1516975080661-46bdcb62b325?auto=format&fit=crop&q=80&w=1920',
    subtitle: 'Relax & Rejuvenate',
    title: 'World-Class Spa Experience',
  }
];

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.heroSection}>
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className={styles.swiperContainer}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div className={styles.slideContent}>
                <div 
                  className={styles.bgImage}
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className={styles.overlay} />
                </div>
                
                {isActive && (
                  <div className={styles.textContent}>
                    <motion.span
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className={styles.subtitle}
                    >
                      {index === 0 ? t('hero', 'subtitle') : slide.subtitle}
                    </motion.span>
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className={styles.title}
                    >
                      {index === 0 ? t('hero', 'title') : slide.title}
                    </motion.h1>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    >
                      <button className={styles.ctaButton}>
                        {t('hero', 'cta') || 'Explore Services'}
                      </button>
                    </motion.div>
                  </div>
                )}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
