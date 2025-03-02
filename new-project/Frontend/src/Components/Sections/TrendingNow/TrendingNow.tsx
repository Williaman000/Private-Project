import React, { useRef } from 'react';
import styles from './TrendingNow.module.sass';
import { trendingData } from '../../../data/trendingData';

const TrendingNow: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      const newScrollPosition =
        direction === 'left'
          ? carouselRef.current.scrollLeft - scrollAmount
          : carouselRef.current.scrollLeft + scrollAmount;

      carouselRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className={styles.trendingNow}>
      <h2 className={styles.title}>Trending Now</h2>
      <div className={styles.carouselWrapper}>
        <button
          className={`${styles.slideButton} ${styles.left}`}
          onClick={() => scrollCarousel('left')}
        >
          &lt;
        </button>
        <div className={styles.carousel} ref={carouselRef}>
          {trendingData.map((item) => (
            <div key={item.id} className={styles.card}>
              <div
                className={styles.image}
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              />
              <div className={styles.number}>{item.id}</div>
            </div>
          ))}
        </div>
        <button
          className={`${styles.slideButton} ${styles.right}`}
          onClick={() => scrollCarousel('right')}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default TrendingNow;
