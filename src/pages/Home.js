import React from 'react';
import Header from '../components/Header';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Menu from '../components/Menu';
import Features from '../components/Features';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div>
      <Header />
      <Menu />
      <HeroSection />
      <Features />
      <AboutUs />
      <Services />
    </div>
  );
};

export default Home;
