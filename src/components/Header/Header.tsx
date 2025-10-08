import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" className={styles.logoImage} />
          <span className={styles.logoText}>MINA'S TABLE</span>
        </div>

      </div>
    </header>
  );
};

export default Header;
