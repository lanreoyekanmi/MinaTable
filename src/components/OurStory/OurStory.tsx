import React from 'react';
import styles from './OurStory.module.css';

const OurStory: React.FC = () => {
  return (
    <section className={styles.ourStory}>
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
      </div>
    </section>
  );
};

export default OurStory;
