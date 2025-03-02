import React, { useEffect, useState } from 'react';
import { fetchMovieNews } from '../../../api/movieNews';
import styles from './MovieNews.module.sass';

interface MovieNewsItem {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
}

const MovieNews: React.FC = () => {
  const [news, setNews] = useState<MovieNewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getMovieNews = async () => {
      setLoading(true);
      const data = await fetchMovieNews();
      setNews(data);
      setLoading(false);
    };

    getMovieNews();
  }, []);

  return (
    <section className={styles.movieNews}>
      <h2>🎥 Latest Movie News</h2>
      {loading ? (
        <p>Loading movie news...</p>
      ) : (
        <div className={styles.newsGrid}>
          {news.slice(0, 6).map((movie) => (
            <div key={movie.id} className={styles.newsCard}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className={styles.newsContent}>
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

export default MovieNews;
