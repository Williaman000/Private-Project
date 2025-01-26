import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMovieDetails, fetchSimilarMovies } from "../../../api/tmdb";
import ReviewForm from "../../Atoms/ReviewForm/ReviewForm";
import ReviewList from "../../Atoms/ReviewList/ReviewList";
import { useReviews } from "../../../Contexts/ReviewContext";
import styles from "./MovieDetails.module.sass";

interface MovieDetailsData {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
  genres: { id: number; name: string }[];
  runtime: number;
}

interface SimilarMovie {
  id: number;
  title: string;
  poster_path: string;
}

interface Review {
  id: number;
  movieId: number;
  content: string;
}

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetailsData | null>(null);
  const [similarMovies, setSimilarMovies] = useState<SimilarMovie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { reviews, addReview } = useReviews();

  useEffect(() => {
    if (!id) return;

    const getMovieData = async () => {
      setLoading(true);
      try {
        const [movieData, similarData] = await Promise.all([
          fetchMovieDetails(Number(id)),
          fetchSimilarMovies(Number(id)),
        ]);
        setMovie(movieData);
        setSimilarMovies(similarData);
      } catch (err) {
        setError("Failed to fetch movie details.");
      } finally {
        setLoading(false);
      }
    };

    getMovieData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
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
            <strong>Genres:</strong>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p>
            <strong>Runtime:</strong> {movie.runtime} min
          </p>
          <p>
            <strong>Overview:</strong> {movie.overview}
          </p>
        </div>
      </div>

      <div className={styles.reviewsSection}>
        <h2>Reviews</h2>
        <ReviewForm movieId={movie.id} addReview={addReview} />
        <ReviewList
          reviews={
            (Array.isArray(reviews[movie.id])
              ? reviews[movie.id]
              : []) as Review[]
          }
        />
      </div>

      {similarMovies.length > 0 && (
        <div className={styles.similarMovies}>
          <h2>You May Also Like</h2>
          <div className={styles.similarGrid}>
            {similarMovies.map((simMovie) => (
              <div
                key={simMovie.id}
                className={styles.similarCard}
                onClick={() => navigate(`/movie/${simMovie.id}`)}
                role="button"
                tabIndex={0}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${simMovie.poster_path}`}
                  alt={simMovie.title}
                />
                <h3>{simMovie.title}</h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
