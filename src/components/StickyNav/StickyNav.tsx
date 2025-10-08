import React, { useState, useEffect } from 'react';
import styles from './StickyNav.module.css';
import MenuOverlay from '../MenuOverlay/MenuOverlay';

const StickyNav: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsSticky(window.scrollY > heroHeight * 0.7);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleMenuClick = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleReservationClick = () => {
    // Handle reservation logic
    console.log('Reservation clicked');
  };

  return (
    <nav className={`${styles.stickyNav} ${isSticky ? styles.sticky : ''}`}>
      <div className={styles.navContainer}>
        <button 
          className={styles.menuButton}
          onClick={handleMenuClick}
          aria-label="Open menu"
        >
          <span className={styles.menuText}>OUR MENU</span>
          <div className={styles.hamburger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        
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
