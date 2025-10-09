import React, { useState } from 'react';
import Header from '../components/Header/Header';
import styles from './ReservationPage.module.css';
import StickyNav from '../components/StickyNav/StickyNav';
import Menu from '../components/Menu/Menu';
import styBackground from '../assets/stybackground.png';

const ReservationPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openEnquiryModal = () => setIsEnquiryModalOpen(true);
  const closeEnquiryModal = () => setIsEnquiryModalOpen(false);

  return (
    <div className={styles.reservationPage}>
      <Header />
      <div className={styles.container}>
        <div className={styles.headerSection}>
          <h2 className={styles.mainTitle}>CREATE MOMENTS</h2>
          <p className={styles.subtitle}>
            FROM INTIMATE TABLES TO WHOLE-ROOM TAKEOVERS, WE<br />
            SHARE THE SPACE AROUND YOUR MOMENT—THOUGHTFUL<br />
            SERVICE, GENTLE SERVICE, AND EVERY DETAIL HANDLED WITH<br />
            WARMTH.
          </p>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.restaurantImage}>
            <img src="/src/assets/reseveration-background.png" alt="" />
          </div>
        </div>
        <StickyNav />
        <div className={styles.reservationOptions}>
          <div className={styles.reservationCard}>
            <h3 className={styles.cardTitle}>RESERVATION FOR 1-6 GUESTS</h3>
            <button className={styles.bookButton} onClick={openModal}>BOOK</button>
          </div>
          
          <div className={styles.divider}></div>
          
          <div className={styles.reservationCard}>
            <h3 className={styles.cardTitle}>RESERVATION FOR 7+ GUESTS</h3>
            <button className={styles.enquireButton} onClick={openEnquiryModal}>ENQUIRE</button>
          </div>
        </div>
      </div>
        <Menu />
        
        {/* Reservation Modal */}
        {isModalOpen && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div 
              className={styles.modalContent} 
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundImage: `url(${styBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <button className={styles.closeButton} onClick={closeModal}>×</button>
              
              <div className={styles.modalHeader}>
                <h2>Reserve your table</h2>
                <p>Join us for an unforgettable culinary journey through Southeast Asia.</p>
              </div>
              
              <form className={styles.reservationForm}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Name</label>
                    <input type="text" placeholder="Enter name here" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Party Size</label>
                    <select>
                      <option value="">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Date</label>
                    <input type="text" placeholder="DD / MM / YYYY" />
                  </div>
                </div>
                
                <div className={styles.checkboxGroup}>
                  <input type="checkbox" id="enquiry" />
                  <label htmlFor="enquiry">For parties of 8 or more, SUBMIT AN ENQUIRY</label>
                </div>
                
                <button type="submit" className={styles.findTableButton}>FIND TABLE</button>
              </form>
            </div>
          </div>
        )}

        {/* Enquiry Modal */}
        {isEnquiryModalOpen && (
          <div className={styles.modalOverlay} onClick={closeEnquiryModal}>
            <div 
              className={styles.modalContent} 
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundImage: `url(${styBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <button className={styles.closeButton} onClick={closeEnquiryModal}>×</button>
              
              <form className={styles.enquiryForm}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Name <span className={styles.required}>*</span></label>
                    <input type="text" placeholder="hello@alignui.com" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Email Address <span className={styles.required}>*</span></label>
                    <input type="email" placeholder="hello@alignui.com" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Mobile Number <span className={styles.required}>*</span></label>
                    <input type="tel" placeholder="hello@alignui.com" />
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label>Your enquiry</label>
                  <textarea 
                    rows={6} 
                    placeholder="Your enquiry"
                    className={styles.enquiryTextarea}
                  ></textarea>
                  <div className={styles.charCount}>0/500</div>
                </div>
                
                <div className={styles.checkboxGroup}>
                  <input type="checkbox" id="newsletter" />
                  <label htmlFor="newsletter">Please check this box if you would like to receive latest news and exclusive offers from our restaurant.</label>
                </div>
                
                <div className={styles.checkboxGroup}>
                  <input type="checkbox" id="consent" />
                  <label htmlFor="consent">Any personal data will be used solely in accordance with current UK data protection legislation and will not be used for marketing purposes without your prior consent. By ticking this box you are confirming you are happy for us to use your data in relation to this enquiry.</label>
                </div>
                
                <button type="submit" className={styles.submitEnquiryButton}>SUBMIT ENQUIRY</button>
              </form>
            </div>
          </div>
        )}
    </div>
  );
};

export default ReservationPage;
