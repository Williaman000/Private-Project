import React, { useEffect, useState } from 'react';
import { fetchNowPlayingMovies } from '../../../api/ nowPlaying';
import styles from './NowPlaying.module.sass';

interface NowPlayingItem {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
}

const NowPlaying: React.FC = () => {
  const [movies, setMovies] = useState<NowPlayingItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      setLoading(true);
      const data = await fetchNowPlayingMovies();
      setMovies(data);
      setLoading(false);
    };

    getNowPlayingMovies();
  }, []);

  return (
    <section className={styles.nowPlaying}>
      <h2>🎥 Now Playing in Theaters</h2>
      {loading ? (
        <p>Loading now playing movies...</p>
      ) : (
        <div className={styles.movieGrid}>
          {movies.slice(0, 6).map((movie) => (
            <div key={movie.id} className={styles.movieCard}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className={styles.movieContent}>
                <h3>{movie.title}</h3>
                <p>{movie.overview.slice(0, 100)}...</p>
                <p>
                  <strong>Release Date:</strong> {movie.release_date}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default NowPlaying;
