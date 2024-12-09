import React from 'react';
import styles from './Testimonials.module.sass';
import reviews from '../../../data/reviews';
import { TestimonialProps } from '../../../types/Testimonials/testimonialtypes';

const Testimonials: React.FC = () => {
  return (
    <div className={styles.testimonials}>
      <h2>What Our Users Say</h2>
      <div className={styles.reviewGrid}>
        {reviews.map((review: TestimonialProps, index: number) => (
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
