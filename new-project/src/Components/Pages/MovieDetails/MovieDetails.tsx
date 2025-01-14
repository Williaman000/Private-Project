import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../../api/tmdb";
import styles from "./MovieDetails.module.sass";

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(Number(id));
        setMovie(data);
      } catch (err) {
        setError("Failed to fetch movie details.");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      getMovieDetails();
    }
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!movie) return <p>No movie data found.</p>;

  return (
    <div className={styles.movieDetails}>
      <div className={styles.header}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className={styles.info}>
          <h1>{movie.title}</h1>
          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Rating:</strong> {movie.vote_average} / 10
          </p>
          <p>
            <strong>Overview:</strong> {movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
