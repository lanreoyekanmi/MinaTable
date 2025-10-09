import React from 'react';
import Header from '../components/Header/Header';
import StickyNav from '../components/StickyNav/StickyNav';
import Menu from '../components/Menu/Menu';
import backgroundImage from '../assets/Background+Border.png';
import styles from './MenuPage.module.css';

const MenuPage: React.FC = () => {
  const menuSections = [
    'BEEF', 'CHICKEN', 'PORK', 'FISH', 
    'BREAKFAST', 'LUNCH', 'SUSHI', 'SIDES', 
    'HOT STARTERS', 'COLD STARTERS'
  ];

  return (
    <div className={styles.menuPage}>
      <Header />
      <section className={styles.mainMenuSection}>
        <div className={styles.menuOverlay}>
          <div className={styles.menuContainer}>
            
            {/* Top Section with Branding */}
            <div className={styles.brandingSection} style={{ backgroundImage: `url(${backgroundImage})` }} >
              <div className={styles.brandContainer}>
                <p className={styles.brandSubtitle}>THE ULTIMATE FOOD EXPERIENCE</p>
                <h2 className={styles.menuMainTitle}>DISCOVER OUR MENU</h2>
              </div>
            </div>
 <StickyNav />
            <div className={styles.sideDecoration}></div>
            {/* Menu Categories Section */}
            <div className={styles.menuCategoriesSection}>
              <div className={styles.leftSide}>
                <div className={styles.menuCategories}>
                  {menuSections.map((section) => (
                    <div 
                      key={section} 
                      className={`${styles.menuCategoryItem} ${
                        section === 'BEEF' ? styles.beef :
                        section === 'CHICKEN' ? styles.chicken :
                        section === 'PORK' ? styles.pork : ''
                      }`}
                    >
                      {section}
                    </div>
                  ))}
                </div>
              </div>
              
             
            </div>

          </div>
        </div>
      </section>
      
      <Menu />
    </div>
  );
};

export default MenuPage;
