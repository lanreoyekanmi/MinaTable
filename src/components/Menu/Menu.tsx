import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import styles from './Menu.module.css';

const Menu: React.FC = () => {
  return (
    <section id="menu" className={styles.menu}>
      <div className={styles.container}>
        <div className={styles.menuHeader}>
          <h3 className={styles.menuTitle}>MENU</h3>
        </div>
        <div className={styles.menuTabs}>
          <button className={`${styles.menuTab} ${styles.active}`}>FISH</button>
          <button className={styles.menuTab}>PORK</button>
          <button className={styles.menuTab}>BEEF</button>
          <button className={styles.menuTab}>CHICKEN</button>
        </div>
        
        <div className={styles.menuCard}>
          <div className={styles.menuContent}>
            <div className={styles.operatingHours}>
              <div className={styles.menuDay}>
                <span className={styles.dayLabel}>Monday</span>
                <span className={styles.dayPrice}>Closed</span>
              </div>
              <div className={styles.menuDay}>
                <span className={styles.dayLabel}>Tuesday</span>
                <span className={styles.dayPrice}>Closed</span>
              </div>
              <div className={styles.menuDay}>
                <span className={styles.dayLabel}>Wednesday</span>
                <span className={styles.dayPrice}>10am - 9pm</span>
              </div>
              <div className={styles.menuDay}>
                <span className={styles.dayLabel}>Thursday</span>
                <span className={styles.dayPrice}>10am - 9pm</span>
              </div>
              <div className={styles.menuDay}>
                <span className={styles.dayLabel}>Friday</span>
                <span className={styles.dayPrice}>10am - 9pm</span>
              </div>
              <div className={styles.menuDay}>
                <span className={styles.dayLabel}>Saturday</span>
                <span className={styles.dayPrice}>10am - 9pm</span>
              </div>
              <div className={styles.menuDay}>
                <span className={styles.dayLabel}>Sunday</span>
                <span className={styles.dayPrice}>10am - 9pm</span>
              </div>
            </div>
            
            <div className={styles.curveSection}></div>
            
            <div className={styles.socialSection}>
              <h4 className={styles.socialTitle}>SOCIALS</h4>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon}>
                  <FaFacebookF />
                </a>
                <a href="#" className={styles.socialIcon}>
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
