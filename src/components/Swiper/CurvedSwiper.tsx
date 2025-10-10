import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import styles from './CurvedSwiper.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Import food images
import f1 from '../../assets/f1.jpg';
import f2 from '../../assets/f2.jpeg';
import f3 from '../../assets/f3.png';
import f4 from '../../assets/f4.png';
import f5 from '../../assets/f5.jpg';
import f6 from '../../assets/f6.jpg';

const CurvedSwiper: React.FC = () => {
  // Food images for the swiper
  const images = [
    { id: 1, src: f1, alt: '' },
    { id: 2, src: f2, alt: '' },
    { id: 3, src: f3, alt: '' },
    { id: 4, src: f4, alt: '' },
    { id: 5, src: f5, alt: '' },
    { id: 6, src: f6, alt: '' },
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
