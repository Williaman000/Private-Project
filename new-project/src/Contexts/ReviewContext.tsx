import React, { createContext, useContext, useState, useEffect } from "react";

interface Review {
  id: number;
  movieId: number;
  content: string;
  date: string;
}

interface ReviewContextType {
  reviews: Review[];
  addReview: (movieId: number, content: string) => void;
  deleteReview: (id: number) => void;
}

const ReviewContext = createContext<ReviewContextType | undefined>(undefined);

export const ReviewProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const storedReviews = localStorage.getItem("reviews");
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const addReview = (movieId: number, content: string) => {
    const newReview = {
      id: Date.now(),
      movieId,
      content,
      date: new Date().toLocaleString(),
    };
    setReviews((prev) => [...prev, newReview]);
  };

  const deleteReview = (id: number) => {
    setReviews((prev) => prev.filter((review) => review.id !== id));
  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview, deleteReview }}>
      {children}
    </ReviewContext.Provider>
  );
};

export const useReviews = () => {
  const context = useContext(ReviewContext);
  if (!context) {
    throw new Error("useReviews must be used within a ReviewProvider");
  }
  return context;
};
