import React, { createContext, useContext, useState, useEffect } from "react";

interface Review {
  id: number;
  movieId: number;
  content: string;
  date: string;
}

interface ReviewContextType {
  reviews: Record<number, Review[]>; 
  addReview: (movieId: number, content: string) => void;
  deleteReview: (movieId: number, reviewId: number) => void;
}

const ReviewContext = createContext<ReviewContextType | undefined>(undefined);

export const ReviewProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [reviews, setReviews] = useState<Record<number, Review[]>>({});

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
    const newReview: Review = {
      id: Date.now(),
      movieId,
      content,
      date: new Date().toLocaleString(),
    };
    setReviews((prev) => ({
      ...prev,
      [movieId]: [...(prev[movieId] || []), newReview],
    }));
  };

  const deleteReview = (movieId: number, reviewId: number) => {
    setReviews((prev) => ({
      ...prev,
      [movieId]:
        prev[movieId]?.filter((review) => review.id !== reviewId) || [],
    }));
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
