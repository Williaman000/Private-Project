import React from "react";
import styles from "./ReviewList.module.sass";

interface Review {
  id: number;
  movieId: number;
  content: string;
}

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews = [] }) => {
  return (
    <div className={styles.reviewList}>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review: Review) => (
          <div key={review.id} className={styles.reviewItem}>
            <p>{review.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewList;
