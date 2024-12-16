import React from 'react';
import styles from './TrendingNow.module.sass';
import { trendingData } from '../../../data/trendingData';

const TrendingNow: React.FC = () => {
  return (
    <section className={styles.trendingNow}>
      <h2 className={styles.title}>Trending Now</h2>
      <div className={styles.carousel}>
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
    </section>
  );
};

export default TrendingNow;
