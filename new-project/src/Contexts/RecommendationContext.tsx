import React, { createContext, useContext, useState, ReactNode } from 'react';
import { recommendationData } from '../data/recommendations';

interface Recommendation {
  id: number;
  title: string;
  category: string;
  likes: number;
}

interface RecommendationContextProps {
  recommendations: Recommendation[];
  addLike: (id: number) => void;
}

const RecommendationContext = createContext<RecommendationContextProps | undefined>(undefined);

export const RecommendationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [recommendations, setRecommendations] = useState(recommendationData);

  const addLike = (id: number) => {
    setRecommendations((prev) =>
      prev.map((item) => (item.id === id ? { ...item, likes: item.likes + 1 } : item))
    );
  };

  return (
    <RecommendationContext.Provider value={{ recommendations, addLike }}>
      {children}
    </RecommendationContext.Provider>
  );
};

export const useRecommendation = () => {
  const context = useContext(RecommendationContext);
  if (!context) {
    throw new Error('useRecommendation must be used within a RecommendationProvider');
  }
  return context;
};
