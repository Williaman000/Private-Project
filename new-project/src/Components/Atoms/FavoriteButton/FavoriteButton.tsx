import React from "react";
import { useFavorites } from "../../../Contexts/FavoritesContext";
import styles from "./FavoriteButton.module.sass";

interface FavoriteButtonProps {
  movie: {
    id: number;
    title: string;
    poster_path: string;
  };
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movie }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  const handleClick = () => {
    if (isFavorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <button className={styles.favoriteButton} onClick={handleClick}>
      {isFavorite ? "★ Remove from Favorites" : "☆ Add to Favorites"}
    </button>
  );
};

export default FavoriteButton;
