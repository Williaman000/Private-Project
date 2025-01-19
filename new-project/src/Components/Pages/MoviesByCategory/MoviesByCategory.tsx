import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMoviesByCategory, fetchMovieGenres } from "../../../api/tmdb";
import styles from "./MoviesByCategory.module.sass";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

const MoviesByCategory: React.FC = () => {
  const { genreId } = useParams<{ genreId: string }>();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genreName, setGenreName] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        if (!genreId) return;

        const moviesData = await fetchMoviesByCategory(Number(genreId));
        setMovies(moviesData);

        const genresData: { id: number; name: string }[] =
          await fetchMovieGenres();
        const selectedGenre = genresData.find(
          (g: { id: number; name: string }) => g.id === Number(genreId)
        );
        setGenreName(selectedGenre ? selectedGenre.name : "Unknown Genre");
      } catch (error) {
        console.error("Failed to fetch movies by category:", error);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [genreId]);

  if (loading) return <p>Loading movies...</p>;

  return (
    <div className={styles.moviesByCategory}>
      <h2>{genreName} Movies</h2>
      <div className={styles.movieGrid}>
        {movies.length === 0 ? (
          <p>No movies found for this category.</p>
        ) : (
          movies.map((movie) => (
            <div
              key={movie.id}
              className={styles.movieCard}
              onClick={() => navigate(`/movie/${movie.id}`)}
              role="button"
              tabIndex={0}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p>{movie.release_date}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MoviesByCategory;
