import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Gallery from './components/Gallery/Gallery';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Gallery />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
