import React, { useState } from "react";
import { searchContent } from "../../../api/search";
import SearchBar from "./SearchBar";
import FilterOptions from "./FilterOptions";
import ResultsList from "./ResultsList";
import styles from "./SearchAndFilter.module.sass";

const SearchAndFilter: React.FC = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("popularity.desc");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const data = await searchContent(query, filter);
    setResults(data);
  };

  return (
    <div className={styles.searchAndFilter}>
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
      <FilterOptions filter={filter} setFilter={setFilter} />
      <ResultsList results={results} />
    </div>
  );
};

export default SearchAndFilter;
