import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import StickyNav from '../components/StickyNav/StickyNav';
import Gallery from '../components/Gallery/Gallery';
import CurvedSwiper from '../components/Swiper/CurvedSwiper';
import OurStory from '../components/OurStory/OurStory';
import Menu from '../components/Menu/Menu';

const HomePage: React.FC = () => {
  return (
    <div className="homePage">
      <Header />
      <Hero />
      <StickyNav />
      <CurvedSwiper />
      <Gallery />
      <OurStory />
      <Menu />
    </div>
  );
};

export default HomePage;
