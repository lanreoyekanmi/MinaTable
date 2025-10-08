import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.logo}>
            <span className={styles.logoText}>MINA'S TABLE</span>
          </div>
          
          <div className={styles.footerInfo}>
            <p className={styles.copyright}>
              © 2024 Mina's Table. All rights reserved.
            </p>
            
            <div className={styles.footerLinks}>
              <a href="#privacy" className={styles.footerLink}>Privacy Policy</a>
              <a href="#terms" className={styles.footerLink}>Terms of Service</a>
              <a href="#contact" className={styles.footerLink}>Contact Us</a>
            </div>
            
            <div className={styles.socialLinks}>
              <a href="#facebook" className={styles.socialLink}>Facebook</a>
              <a href="#instagram" className={styles.socialLink}>Instagram</a>
              <a href="#twitter" className={styles.socialLink}>Twitter</a>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p className={styles.address}>
            123 Asian Cuisine Street, Food District, City 12345 | Phone: (555) 123-4567
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
