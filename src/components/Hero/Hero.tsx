import React from 'react';
import styles from './Hero.module.css';
import heroVideo from '../../assets/hero-background.mp4';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.tagline}>
          <span className={styles.taglineText}>THE ULTIMATE TABLE EXPERIENCE</span>
        </div>
        <h1 className={styles.heroTitle}>
          EVERYTHING TASTES<br />
          LIKE A STORY.
        </h1>
      </div>
      <div className={styles.heroBackground}>
        <video 
          className={styles.heroVideo}
          autoPlay 
          muted 
          loop 
          playsInline
          src={heroVideo}
        />
        <div className={styles.heroOverlay}></div>
      </div>
    </section>
  );
};

export default Hero;
