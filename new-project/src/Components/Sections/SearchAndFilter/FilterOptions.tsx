import React from "react";
import styles from "./SearchAndFilter.module.sass";

interface FilterOptionsProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({ filter, setFilter }) => {
  return (
    <div className={styles.filterOptions}>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="popularity.desc">Popularity</option>
        <option value="release_date.desc">Release Date</option>
        <option value="vote_average.desc">Highest Rated</option>
      </select>
    </div>
  );
};

export default FilterOptions;
