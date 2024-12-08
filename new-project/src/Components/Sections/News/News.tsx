import React from 'react';
import styles from './News.module.sass';

const News: React.FC = () => {
  return (
    <section className={styles.news}>
      <h2>News & Updates</h2>
      <ul>
        <li>
          <strong>December 2024:</strong> New movie categories added! Explore the latest sci-fi hits.
        </li>
        <li>
          <strong>January 2025:</strong> Series recommendations are now personalized for every user.
        </li>
        <li>
          <strong>February 2025:</strong> Exciting features coming soon - Stay tuned!
        </li>
      </ul>
    </section>
  );
};

export default News;
