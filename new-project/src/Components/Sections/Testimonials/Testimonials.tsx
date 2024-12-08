import React from 'react';
import styles from './Testimonials.module.sass';

const Testimonials: React.FC = () => {
  const reviews = [
    { name: 'John Doe', text: 'This is the best platform I have ever used!' },
    { name: 'Jane Smith', text: 'Amazing service and great content!' },
    { name: 'Samuel Green', text: 'Highly recommend this to everyone!' },
    { name: 'Sarah White', text: 'I love the user-friendly interface!' },
    { name: 'David Black', text: 'Great customer service and fast response!' },
    { name: 'Emily Brown', text: 'I am very satisfied with the service!' },
  ];

  return (
    <div className={styles.testimonials}>
      <h2>What Our Users Say</h2>
      <div className={styles.reviewGrid}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.reviewCard}>
            <p>"{review.text}"</p>
            <h4>- {review.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
