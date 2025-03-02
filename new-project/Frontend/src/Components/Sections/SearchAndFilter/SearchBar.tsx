import React from "react";
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        value={query || ""}
        onChange={(e) => setQuery && setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search for movies..."
        autoFocus
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
