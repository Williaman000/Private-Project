import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Recommendations.module.sass';

const Recommendations: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.recommendations}>
      <h2>Recommended for You</h2>
      <div className={styles.contentGrid}>
        <div className={styles.card} onClick={() => navigate('/series')}>
          <h3>Popular Series</h3>
          <p>Explore top-rated series like "Breaking Bad" and "Stranger Things".</p>
        </div>
        <div className={styles.card} onClick={() => navigate('/movies')}>
          <h3>Trending Movies</h3>
          <p>Watch blockbuster hits like "Inception" and "Interstellar".</p>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
