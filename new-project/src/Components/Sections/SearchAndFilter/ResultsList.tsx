import React from "react";
import styles from "./SearchAndFilter.module.sass";

interface ResultsListProps {
  results: any[];
}

const ResultsList: React.FC<ResultsListProps> = ({ results }) => {
  return (
    <div className={styles.resultsList}>
      {results.map((item) => (
        <div key={item.id} className={styles.resultCard}>
          <img
            src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
            alt={item.title}
          />
          <h3>{item.title}</h3>
          <p>Rating: {item.vote_average}</p>
        </div>
      ))}
    </div>
  );
};

export default ResultsList;
