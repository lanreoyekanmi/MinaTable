import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LocationPage.module.css';

const LocationPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.locationPage}>
      <div className={styles.container}>
        <nav className={styles.topNav}>
          <button 
            className={styles.backButton} 
            onClick={() => navigate('/')}
            aria-label="Back to Home"
          >
            ← Back to Home
          </button>
        </nav>
        
        <header className={styles.header}>
          <div className={styles.brandSection}>
            <h1 className={styles.brandName}>MINA'S TABLE</h1>
            <p className={styles.subtitle}>THE ULTIMATE FOOD EXPERIENCE</p>
          </div>
          
          <div className={styles.pageTitle}>
            <h2>FIND US</h2>
          </div>
        </header>

        <div className={styles.locationContent}>
          <div className={styles.locationInfo}>
            <div className={styles.infoCard}>
              <h3>ADDRESS</h3>
              <p>123 Gourmet Street<br />Fine Dining District<br />City, State 12345</p>
            </div>
            
            <div className={styles.infoCard}>
              <h3>PHONE</h3>
              <p>(555) 123-4567</p>
            </div>
            
            <div className={styles.infoCard}>
              <h3>EMAIL</h3>
              <p>reservations@minastable.com</p>
            </div>
          </div>

          <div className={styles.hoursSection}>
            <h3>OPERATING HOURS</h3>
            <div className={styles.hoursGrid}>
              <div className={styles.hourItem}>
                <span className={styles.day}>Monday</span>
                <span className={styles.time}>Closed</span>
              </div>
              <div className={styles.hourItem}>
                <span className={styles.day}>Tuesday</span>
                <span className={styles.time}>Closed</span>
              </div>
              <div className={styles.hourItem}>
                <span className={styles.day}>Wednesday</span>
                <span className={styles.time}>10am - 9pm</span>
              </div>
              <div className={styles.hourItem}>
                <span className={styles.day}>Thursday</span>
                <span className={styles.time}>10am - 9pm</span>
              </div>
              <div className={styles.hourItem}>
                <span className={styles.day}>Friday</span>
                <span className={styles.time}>10am - 9pm</span>
              </div>
              <div className={styles.hourItem}>
                <span className={styles.day}>Saturday</span>
                <span className={styles.time}>10am - 9pm</span>
              </div>
              <div className={styles.hourItem}>
                <span className={styles.day}>Sunday</span>
                <span className={styles.time}>10am - 9pm</span>
              </div>
            </div>
          </div>

          <div className={styles.mapSection}>
            <div className={styles.mapPlaceholder}>
              <h3>LOCATION MAP</h3>
              <p>Interactive map would be displayed here</p>
              <p>Integration with Google Maps or similar service</p>
            </div>
          </div>

          <div className={styles.directionsSection}>
            <h3>DIRECTIONS</h3>
            <div className={styles.directionsContent}>
              <p><strong>By Car:</strong> Take Highway 1 to Exit 15, turn left on Gourmet Street. We're located in the Fine Dining District, with valet parking available.</p>
              <p><strong>By Public Transport:</strong> Take Metro Line 2 to Culinary Station, then walk 2 blocks north on Gourmet Street.</p>
              <p><strong>Parking:</strong> Complimentary valet parking is available for all dinner guests. Street parking is also available on adjacent streets.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
