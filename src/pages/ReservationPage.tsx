import React from 'react';
import styles from './ReservationPage.module.css';

const ReservationPage: React.FC = () => {

  return (
    <div className={styles.reservationPage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.brandSection}>
            <h1 className={styles.brandName}>MINA'S TABLE</h1>
            <p className={styles.subtitle}>THE ULTIMATE FOOD EXPERIENCE</p>
          </div>
          
          <div className={styles.pageTitle}>
            <h2>MAKE A RESERVATION</h2>
          </div>
        </header>

        <div className={styles.reservationForm}>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="date">Preferred Date</label>
                <input type="date" id="date" name="date" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="time">Preferred Time</label>
                <select id="time" name="time" required>
                  <option value="">Select Time</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="17:30">5:30 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="18:30">6:30 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="19:30">7:30 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="20:30">8:30 PM</option>
                </select>
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="guests">Number of Guests</label>
              <select id="guests" name="guests" required>
                <option value="">Select Party Size</option>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5 People</option>
                <option value="6">6 People</option>
                <option value="7">7 People</option>
                <option value="8">8+ People</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="special">Special Requests</label>
              <textarea id="special" name="special" rows={4} placeholder="Any special dietary requirements, occasions, or preferences..."></textarea>
            </div>
            
            <button type="submit" className={styles.submitButton}>
              MAKE RESERVATION
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
