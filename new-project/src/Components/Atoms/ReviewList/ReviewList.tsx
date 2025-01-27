import React from "react";
import styles from "./ReviewList.module.sass";
import { useReviews } from "../../../Contexts/ReviewContext";

interface Review {
  id: number;
  content: string;
}

interface ReviewListProps {
  movieId: number;
  reviews: Review[];
}

const ReviewList: React.FC<ReviewListProps> = ({ movieId, reviews = [] }) => {
  const { deleteReview } = useReviews();

  return (
    <div className={styles.reviewList}>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review) => (
          <div key={review.id} className={styles.reviewItem}>
            <p>{review.content}</p>
            <button
              className={styles.deleteButton}
              onClick={() => deleteReview(movieId, review.id)}
            >
              ❌ Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewList;
