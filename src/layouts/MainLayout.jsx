import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollProgress from '../components/ScrollProgress/ScrollProgress';
import ThemeToggle from '../components/ThemeToggle/ThemeToggle';
import CustomCursor from '../components/CustomCursor/CustomCursor';
import styles from './MainLayout.module.css';

const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default MainLayout;
