import React from 'react';
import styles from './Menu.module.css';

const Menu: React.FC = () => {
  return (
    <section id="menu" className={styles.menu}>
      <div className={styles.container}>
        <div className={styles.storySection}>
          <h2 className={styles.storyTitle}>OUR STORY</h2>
          <p className={styles.storyText}>
            Discover The Finest, Best Flavours Of East And Southeast Asia At
            Mina's Table. Offers Vietnamese, Thai, Malaysian, Indonesian, Singapore,
            Cambodian And Laos Cuisines. A Culinary Experience Found Nowhere Else
            & You'll Discover Depth And A Touch Of Operated Blends. With Palate,
            Bite Options Between And Complements In Every Bite, Craft Richly Felt
            As Authentic Smoky.
          </p>
          <p className={styles.storyText}>
            Creating Something Classic? You'll Find Comfort Forward Favourites
            Such As Pad Thai, Gai Lan, Pho, Satay, Laksa, Nasi Goreng, And Rendang.
            Looking For Something A Little Different? Sample Carefully Selected
            Signature Dishes.
          </p>
          <p className={styles.storyText}>
            Join Us In The Dining Room And Let Us Take Care Of The Rest.
            Reserve A Seat And Enjoy Exceptional Signature Meals In Miami, Modern
            Architecture Section.
          </p>
        </div>
        
        <div className={styles.menuCard}>
          <div className={styles.menuHeader}>
            <h3 className={styles.menuTitle}>MENU</h3>
          </div>
          
          <div className={styles.menuTabs}>
            <button className={`${styles.menuTab} ${styles.active}`}>FISH</button>
            <button className={styles.menuTab}>PORK</button>
            <button className={styles.menuTab}>BEEF</button>
            <button className={styles.menuTab}>CHICKEN</button>
          </div>
          
          <div className={styles.menuContent}>
            <div className={styles.menuDay}>
              <span className={styles.dayLabel}>Monday</span>
              <span className={styles.dayPrice}>$8.00</span>
            </div>
            <div className={styles.menuDay}>
              <span className={styles.dayLabel}>Tuesday</span>
              <span className={styles.dayPrice}>$7.00</span>
            </div>
            <div className={styles.menuDay}>
              <span className={styles.dayLabel}>Wednesday</span>
              <span className={styles.dayPrice}>$6.00</span>
            </div>
            <div className={styles.menuDay}>
              <span className={styles.dayLabel}>Thursday</span>
              <span className={styles.dayPrice}>$8.00</span>
            </div>
            <div className={styles.menuDay}>
              <span className={styles.dayLabel}>Friday</span>
              <span className={styles.dayPrice}>$7.00</span>
            </div>
            <div className={styles.menuDay}>
              <span className={styles.dayLabel}>Saturday</span>
              <span className={styles.dayPrice}>$8.00</span>
            </div>
            <div className={styles.menuDay}>
              <span className={styles.dayLabel}>Sunday</span>
              <span className={styles.dayPrice}>$6.00</span>
            </div>
          </div>
          
          <div className={styles.socialSection}>
            <h4 className={styles.socialTitle}>SOCIAL</h4>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon}>📘</a>
              <a href="#" className={styles.socialIcon}>📷</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
