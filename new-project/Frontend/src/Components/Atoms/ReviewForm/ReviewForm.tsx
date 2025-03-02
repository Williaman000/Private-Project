import React, { useState } from "react";
import styles from "./ReviewForm.module.sass";

interface ReviewFormProps {
  movieId: number;
  addReview: (movieId: number, content: string) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ movieId, addReview }) => {
  const [review, setReview] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!review.trim()) return;
    addReview(movieId, review);
    setReview("");
  };

  return (
    <form className={styles.reviewForm} onSubmit={handleSubmit}>
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your review..."
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
