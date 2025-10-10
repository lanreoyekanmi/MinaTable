import React from 'react';
import styles from './Gallery.module.css';
import b3Image from '../../assets/b3.png';
import potImage from '../../assets/pot.png';

const Gallery: React.FC = () => {
  return (
    <section className={styles.gallery}>
      <div className={styles.container}>
        <div className={styles.galleryHeader}>
          <p className={styles.subtitle}>
            Catch Contemporary East & Southeast Asian Kitchens
          </p>
          <h2 className={styles.title}>
            East And Southeast Asian Cuisine, Rooted In<br />
            Tradition And Elevated With Modern Technique<br />
            And Care.
          </h2>
          <p className={styles.description}>
            Discover food Quality Roasted, Slow Kitchen Look.<br />
            Through East & Southeast Asian Kitchens Methods.<br />
            Contemporary Bumbu & Asian Culture Painting Advances<br />
            In Ingredients, Served Superbly And Recipe Menus.<br />
            Authentic Service
          </p>
        </div>
        
        <div className={styles.foodGrid}>
          <div className={styles.foodItem}>
            <div className={styles.foodImage}>
              <img src={b3Image} alt="Soup" className={styles.foodImg} />
            </div>
            <span className={styles.foodLabel}>Soup</span>
          </div>
          <div className={styles.foodItem}>
            <div className={styles.foodImage}>
              <img src={b3Image} alt="Snacks" className={styles.foodImg} />
            </div>
            <span className={styles.foodLabel}>Snacks</span>
          </div>
          <div className={styles.foodItem}>
            <div className={styles.foodImage}>
              <img src={b3Image} alt="Breakfast" className={styles.foodImg} />
            </div>
            <span className={styles.foodLabel}>Breakfast</span>
          </div>
          <div className={styles.foodItem}>
            <div className={styles.foodImage}>
              <img src={b3Image} alt="Lunch" className={styles.foodImg} />
            </div>
            <span className={styles.foodLabel}>Lunch</span>
          </div>
        </div>
        
        <div className={styles.experienceSection}>
          <div className={styles.sideDecoration}></div>
          <div className={styles.experienceContent}>
            <h3 className={styles.experienceTitle}>
              TASTE! OUR MEALS TO AND GET A TASTE OF<br />
              ASIAN SCENERY
            </h3>
            
            <div className={styles.menuCategories}>
              <div className={`${styles.menuCategory} ${styles.beef}`}>BEEF</div>
              <div className={`${styles.menuCategory} ${styles.chicken}`}>CHICKEN</div>
              <div className={`${styles.menuCategory} ${styles.rice}`}>RICE</div>
              <div className={`${styles.menuCategory} ${styles.fish}`}>FISH</div>
              <div className={`${styles.menuCategory} ${styles.cocktails}`}>COCKTAILS</div>
            </div>
            
            <div className={styles.bowlIllustration}>
              <img src={potImage} alt="Pot" className={styles.potImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
