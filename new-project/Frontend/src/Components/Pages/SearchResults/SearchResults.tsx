import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchResults } from "../../../api/tmdb";
import styles from "./SearchResults.module.sass";

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getResults = async () => {
      if (!query) return;

      setIsLoading(true);
      try {
        const data = await fetchSearchResults(query);
        setResults(data.results || []);
      } catch (err) {
        setError("Failed to fetch results.");
      } finally {
        setIsLoading(false);
      }
    };

    getResults();
  }, [query]);

  if (isLoading) return <p className={styles.loading}>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.searchResults}>
      <h2>Search Results for "{query}"</h2>
      {results.length === 0 ? (
        <p className={styles.noResults}>
          No results found. Try another search.
        </p>
      ) : (
        <div className={styles.resultsGrid}>
          {results.map((movie: any) => (
            <div key={movie.id} className={styles.card}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p>{movie.release_date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
