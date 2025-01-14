import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchTrendingMovies } from "../../../api/tmdb";
import styles from "./TrendingMovies.module.sass";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const TrendingMovies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handlePosterClick = (id: number) => {
    navigate(`/movie/${id}`);
  };

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch (err) {
        setError("Failed to fetch trending movies.");
      }
    };

    getTrendingMovies();
  }, []);

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <section className={styles.trendingMovies}>
      <h2>Trending Movies</h2>
      <div className={styles.movieGrid}>
        {movies.map((movie) => (
          <div
            key={movie.id}
            className={styles.movieCard}
            onClick={() => handlePosterClick(movie.id)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingMovies;
