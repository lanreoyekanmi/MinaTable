import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import styles from './CurvedSwiper.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const CurvedSwiper: React.FC = () => {
  // Food images for the swiper
  const images = [
    { id: 1, src: '/src/assets/f1.jpg', alt: '' },
    { id: 2, src: '/src/assets/f2.jpeg', alt: '' },
    { id: 3, src: '/src/assets/f3.png', alt: '' },
    { id: 4, src: '/src/assets/f4.png', alt: '' },
    { id: 5, src: '/src/assets/f5.jpg', alt: '' },
    { id: 6, src: '/src/assets/f6.jpg', alt: '' },
  ];

  return (
    <section className={styles.swiperSection}>
      <div className={styles.container}>
        <div className={styles.swiperContainer}>
          <Swiper
            modules={[Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            loop={true}
            touchRatio={1}
            touchAngle={45}
            threshold={10}
            shortSwipes={true}
            longSwipes={true}
            longSwipesRatio={0.5}
            longSwipesMs={300}
            followFinger={true}
            allowTouchMove={true}
            touchStartPreventDefault={false}
            className={styles.swiper}
          >
            {images.map((image) => (
              <SwiperSlide key={image.id} className={styles.swiperSlide}>
                <div className={styles.imageContainer}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={styles.slideImage}
                  />
                  <div className={styles.imageOverlay}>
                    <h3 className={styles.imageTitle}>{image.alt}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CurvedSwiper;
