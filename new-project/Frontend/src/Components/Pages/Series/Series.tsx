import React, { useEffect, useState } from "react";
import { fetchTVSeries } from "../../../api/tmdb";
import { useNavigate } from "react-router-dom";
import styles from "./Series.module.sass";

interface TVSeries {
  id: number;
  name: string;
  poster_path: string;
  first_air_date: string;
  vote_average: number;
}

const Series: React.FC = () => {
  const [series, setSeries] = useState<TVSeries[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getSeries = async () => {
      try {
        const data = await fetchTVSeries();
        setSeries(Array.isArray(data) ? data : []);
      } catch (err) {
        setError("Failed to fetch TV series.");
      } finally {
        setLoading(false);
      }
    };
    getSeries();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.seriesPage}>
      <h1>Popular TV Series</h1>
      <div className={styles.seriesGrid}>
        {series.map((tv) => (
          <div 
            key={tv.id} 
            className={styles.seriesCard}
            onClick={() => navigate(`/series/${tv.id}`)}
            role="button"
            tabIndex={0}
          >
            <img src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} alt={tv.name} />
            <h3>{tv.name}</h3>
            <p>First Aired: {tv.first_air_date}</p>
            <p>Rating: {tv.vote_average} / 10</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Series;
