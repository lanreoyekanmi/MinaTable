import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './StickyNav.module.css';
import MenuOverlay from '../MenuOverlay/MenuOverlay';

const StickyNav: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsSticky(window.scrollY > heroHeight * 0.7);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuTextClick = () => {
    navigate('/menu');
  };

  const handleHamburgerClick = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleReservationClick = () => {
    navigate('/reservation');
  };

  return (
    <nav className={`${styles.stickyNav} ${isSticky ? styles.sticky : ''}`}>
      <div className={styles.navContainer}>
        <div className={styles.menuButton}>
          <span 
            className={styles.menuText}
            onClick={handleMenuTextClick}
          >
            OUR MENU
          </span>
          <div 
            className={styles.hamburger}
            onClick={handleHamburgerClick}
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <button 
          className={styles.reservationButton}
          onClick={handleReservationClick}
        >
          RESERVATION
        </button>
      </div>
      
      <MenuOverlay isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </nav>
  );
};

export default StickyNav;
