import React, { Suspense, lazy } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../../components/SEO/SEO';
import styles from './Home.module.css';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import About from '../../components/About/About';

gsap.registerPlugin(ScrollTrigger);

// Lazy load below-the-fold components
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

const Loader = () => (
  <div style={{ minHeight: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    Loading...
  </div>
);

const Home = () => {
  return (
    <>
      <SEO />
      <div className={styles.homeContainer}>
        <Hero />
        <Services />
        <About />
        <Suspense fallback={<Loader />}>
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
