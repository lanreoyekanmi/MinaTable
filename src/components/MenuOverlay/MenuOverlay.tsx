import React from 'react';
import styles from './MenuOverlay.module.css';
import menuBackground from '../../assets/menu.png';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  const handleMenuItemClick = (item: string) => {
    console.log(`Navigating to: ${item}`);
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.menuContainer} style={{ backgroundImage: `url(${menuBackground})` }}>
        <div className={styles.menuContent}>
          <div className={styles.brandContainer}>
            <div className={styles.minaText}>MINA'S</div>
            <div className={styles.logoSpace}></div>
            <div className={styles.tableText}>TABLE</div>
          </div>
          
          <nav className={styles.navigation}>
            <button 
              className={styles.navItem}
              onClick={() => handleMenuItemClick('home')}
            >
              Home Page
            </button>
            
            <button 
              className={styles.navItem}
              onClick={() => handleMenuItemClick('menu')}
            >
              Menu
            </button>
            
            <button 
              className={styles.navItem}
              onClick={() => handleMenuItemClick('reservation')}
            >
              Reservation
            </button>
            
            <button 
              className={styles.navItem}
              onClick={() => handleMenuItemClick('location')}
            >
              Locate Us
            </button>
          </nav>
          
          <button className={styles.closeButton} onClick={onClose}>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
