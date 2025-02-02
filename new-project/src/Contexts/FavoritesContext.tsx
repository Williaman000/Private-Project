import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface FavoritesContextType {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: number) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie: Movie) => {
    if (!favorites.find((fav) => fav.id === movie.id)) {
      const updatedFavorites = [...favorites, movie];
      setFavorites(updatedFavorites);
    }
  };

  const removeFavorite = (id: number) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== id);
    setFavorites(updatedFavorites);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
