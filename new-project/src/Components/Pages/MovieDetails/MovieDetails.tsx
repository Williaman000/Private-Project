import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMovieDetails, fetchSimilarMovies } from "../../../api/tmdb";
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

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetailsData | null>(null);
  const [similarMovies, setSimilarMovies] = useState<SimilarMovie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getMovieDetails = async () => {
      if (!id) return;

      setLoading(true);
      try {
        const data = await fetchMovieDetails(Number(id));
        setMovie(data);

        // Fetch similar movies
        const similarData = await fetchSimilarMovies(Number(id));
        setSimilarMovies(similarData);
      } catch (err) {
        setError("Failed to fetch movie details.");
      } finally {
        setLoading(false);
      }
    };

    getMovieDetails();
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

      {/* Similar Movies Section */}
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
