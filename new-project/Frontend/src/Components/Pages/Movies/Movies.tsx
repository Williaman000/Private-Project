import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../../api/tmdb"; 
import { useNavigate } from "react-router-dom";
import styles from "./Movies.module.sass";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchMovies();
        if (Array.isArray(data)) {
          setMovies(data);
        } else {
          setMovies([]); 
        }
      } catch (err) {
        setError("Failed to fetch movies.");
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.movies}>
      <h2>Movies</h2>
      <div className={styles.movieGrid}>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div
              key={movie.id}
              className={styles.movieCard}
              onClick={() => navigate(`/movie/${movie.id}`)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p>{movie.release_date}</p>
            </div>
          ))
        ) : (
          <p>No movies available.</p>
        )}
      </div>
    </div>
  );
};

export default Movies;
