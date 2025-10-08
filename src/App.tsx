import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import StickyNav from './components/StickyNav/StickyNav';
import Gallery from './components/Gallery/Gallery';
import Menu from './components/Menu/Menu';
import CurvedSwiper from './components/Swiper/CurvedSwiper';
import Footer from './components/Footer/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <StickyNav />
      <CurvedSwiper />
      <Gallery />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
