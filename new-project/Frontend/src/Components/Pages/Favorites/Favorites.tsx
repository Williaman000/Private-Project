import React from "react";
import { useFavorites } from "../../../Contexts/FavoritesContext";
import styles from "./Favorites.module.sass";

const Favorites: React.FC = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className={styles.favorites}>
      <h2>Your Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <div className={styles.movieGrid}>
          {favorites.map((movie) => (
            <div key={movie.id} className={styles.movieCard}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <button onClick={() => removeFavorite(movie.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
