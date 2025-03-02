import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTVSeriesDetails } from "../../../api/tmdb";
import styles from "./SeriesDetails.module.sass";

interface TVSeriesDetails {
  id: number;
  name: string;
  overview: string;
  first_air_date: string;
  poster_path: string;
  vote_average: number;
  genres: { id: number; name: string }[];
  number_of_seasons: number;
}

const SeriesDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [series, setSeries] = useState<TVSeriesDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getSeriesDetails = async () => {
      if (!id) return;
      try {
        const data = await fetchTVSeriesDetails(Number(id));
        setSeries(data);
      } catch (err) {
        setError("Failed to fetch TV series details.");
      } finally {
        setLoading(false);
      }
    };
    getSeriesDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!series) return <p>No series data found.</p>;

  return (
    <div className={styles.seriesDetails}>
      <img src={`https://image.tmdb.org/t/p/w500${series.poster_path}`} alt={series.name} />
      <div className={styles.info}>
        <h1>{series.name}</h1>
        <p><strong>First Air Date:</strong> {series.first_air_date}</p>
        <p><strong>Seasons:</strong> {series.number_of_seasons}</p>
        <p><strong>Rating:</strong> {series.vote_average} / 10</p>
        <p><strong>Genres:</strong> {series.genres.map((g) => g.name).join(", ")}</p>
        <p><strong>Overview:</strong> {series.overview}</p>
      </div>
    </div>
  );
};

export default SeriesDetails;
