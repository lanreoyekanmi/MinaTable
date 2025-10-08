import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import StickyNav from './components/StickyNav/StickyNav';
import Gallery from './components/Gallery/Gallery';
import Menu from './components/Menu/Menu';
import CurvedSwiper from './components/Swiper/CurvedSwiper';
import OurStory from './components/OurStory/OurStory';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <StickyNav />
      <CurvedSwiper />
      <Gallery />
     <OurStory /> 
      <Menu />
    </div>
  );
}

export default App;
