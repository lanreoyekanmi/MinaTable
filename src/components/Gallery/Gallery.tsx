import React from 'react';
import styles from './Gallery.module.css';

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
              <img src="/src/assets/b3.png" alt="Soup" className={styles.foodImg} />
            </div>
            <span className={styles.foodLabel}>Soup</span>
          </div>
          <div className={styles.foodItem}>
            <div className={styles.foodImage}>
              <img src="/src/assets/b3.png" alt="Snacks" className={styles.foodImg} />
            </div>
            <span className={styles.foodLabel}>Snacks</span>
          </div>
          <div className={styles.foodItem}>
            <div className={styles.foodImage}>
              <img src="/src/assets/b3.png" alt="Breakfast" className={styles.foodImg} />
            </div>
            <span className={styles.foodLabel}>Breakfast</span>
          </div>
          <div className={styles.foodItem}>
            <div className={styles.foodImage}>
              <img src="/src/assets/b3.png" alt="Lunch" className={styles.foodImg} />
            </div>
            <span className={styles.foodLabel}>Lunch</span>
          </div>
        </div>
        
        <div className={styles.experienceSection}>
          <div className={styles.experienceContent}>
            <h3 className={styles.experienceTitle}>
              TASTE! OUR MEALS TO AND GET A TASTE OF<br />
              ASIAN SCENERY
            </h3>
            
            <div className={styles.menuCategories}>
              <div className={styles.menuCategory}>BEEF</div>
              <div className={styles.menuCategory}>CHICKEN</div>
              <div className={styles.menuCategory}>RICE</div>
              <div className={styles.menuCategory}>FISH</div>
              <div className={styles.menuCategory}>COCKTAILS</div>
            </div>
            
            <div className={styles.bowlIllustration}>
              <div className={styles.bowl}>
                <div className={styles.chopsticks}></div>
                <div className={styles.bowlContent}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
