import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchAndFilter.module.sass";

interface SearchBarProps {
  query?: string;
  setQuery?: (query: string) => void;
  onSearch?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery, onSearch }) => {
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query?.trim()) {
      if (onSearch) {
        onSearch();
      }
      navigate(`/search?query=${query.trim()}`);
    }
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        value={query || ""}
        onChange={(e) => setQuery && setQuery(e.target.value)}
        placeholder="Search for movies..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
