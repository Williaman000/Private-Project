import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMovieGenres } from "../../../api/tmdb";
import styles from "./MovieCategories.module.sass";

interface Genre {
  id: number;
  name: string;
}

const MovieCategories: React.FC = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getGenres = async () => {
      try {
        const genresData = await fetchMovieGenres();
        setGenres(genresData);
      } catch (error) {
        console.error("Failed to fetch genres:", error);
      }
    };

    getGenres();
  }, []);

  return (
    <div className={styles.movieCategories}>
      <h2>Browse Movies by Category</h2>
      <div className={styles.genreList}>
        {genres.map((genre) => (
          <button
            key={genre.id}
            className={styles.genreButton}
            onClick={() => navigate(`/movies/${genre.id}`)}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MovieCategories;
