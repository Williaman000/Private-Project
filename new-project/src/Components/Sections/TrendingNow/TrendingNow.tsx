import React from 'react';
import styles from './TrendingNow.module.sass';

const trendingData = [
  { id: 1, title: 'Mononoke', imageUrl: 'url-to-image-1' },
  { id: 2, title: 'あなたの番です', imageUrl: 'url-to-image-2' },
  { id: 3, title: 'Dune Part Two', imageUrl: 'url-to-image-3' },
  { id: 4, title: 'The Hunt', imageUrl: 'url-to-image-4' },
  { id: 5, title: 'Feeling Good', imageUrl: 'url-to-image-5' },
  { id: 6, title: 'メタモン フォーゼ', imageUrl: 'url-to-image-6' },
  { id: 7, title: 'Accident Man', imageUrl: 'url-to-image-7' },
];

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
