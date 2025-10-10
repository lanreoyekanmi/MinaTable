import React from 'react';
import Header from '../components/Header/Header';
import StickyNav from '../components/StickyNav/StickyNav';
import Menu from '../components/Menu/Menu';
import styles from './LocationPage.module.css';
import locationImage from '../assets/location.png';

const LocationPage: React.FC = () => {
 
  return (
    <div className={styles.locationPage}>
      <Header />
      <div className={styles.container}>
        
        <div className={styles.pageTitle}>
          <h2>FIND US</h2>
          <StickyNav />
        </div>

        <div className={styles.locationContent}>
          <div className={styles.mapSection}>
            <div className={styles.mapContainer}>
              <img src={locationImage} alt="Restaurant Location Map" className={styles.mapImage} />
              <div className={styles.addressText}>
                <h3>ADDRESS</h3>
                <p>ADDRESS 602, 1982 UNITED KINGDOM</p>
              </div>
            </div>
          </div>

         
        </div>
      </div>
        <Menu />
    </div>
  );
};

export default LocationPage;
