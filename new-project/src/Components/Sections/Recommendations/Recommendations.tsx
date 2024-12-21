import React from 'react';
import { useRecommendation } from '../../../Contexts/RecommendationContext';
import styles from './Recommendations.module.sass';

const Recommendations: React.FC = () => {
  const { recommendations, addLike } = useRecommendation();

  return (
    <section className={styles.recommendations}>
      <h2>Personalized Recommendations</h2>
      <ul>
        {recommendations.map((item) => (
          <li key={item.id} className={styles.card}>
            <h3>{item.title}</h3>
            <p>Category: {item.category}</p>
            <p>Likes: {item.likes}</p>
            <button onClick={() => addLike(item.id)}>👍 Like</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Recommendations;
