import React, { Suspense, lazy, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Home.module.css';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import About from '../../components/About/About';

gsap.registerPlugin(ScrollTrigger);

// Lazy load below-the-fold components to improve performance and fix chunk size warning
const WhyChooseUs = lazy(() => import('../../components/WhyChooseUs/WhyChooseUs'));
const Gallery = lazy(() => import('../../components/Gallery/Gallery'));
const BeforeAfter = lazy(() => import('../../components/BeforeAfter/BeforeAfter'));
const VideoShowcase = lazy(() => import('../../components/VideoShowcase/VideoShowcase'));
const Pricing = lazy(() => import('../../components/Pricing/Pricing'));
const Booking = lazy(() => import('../../components/Booking/Booking'));
const Testimonials = lazy(() => import('../../components/Testimonials/Testimonials'));
const Team = lazy(() => import('../../components/Team/Team'));
const FAQ = lazy(() => import('../../components/FAQ/FAQ'));
const Contact = lazy(() => import('../../components/Contact/Contact'));
const Instagram = lazy(() => import('../../components/Instagram/Instagram'));
import SEO from '../../components/SEO/SEO';

const Home = () => {
  const { t } = useLanguage();
  const heroRef = useRef(null);
  const textRef = useRef(null);

  // GSAP removed for hero since Hero is now a separate component using Framer Motion
  useEffect(() => {
    // Other global effects if needed
  }, []);

  return (
    <>
      <SEO />
      <div className={styles.homeContainer}>
        <Hero />
        
        <Services />
        <About />
        <Suspense fallback={<div style={{ minHeight: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loading...</div>}>
          <WhyChooseUs />
          <Gallery />
          <BeforeAfter />
          <VideoShowcase />
          <Pricing />
          <Booking />
          <Testimonials />
          <Team />
          <FAQ />
          <Contact />
          <Instagram />
        </Suspense>
      </div>
    </>
  );
};

export default Home;
