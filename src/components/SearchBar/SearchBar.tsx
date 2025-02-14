import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar: React.FC = () => {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Search for a song, album, or artist" />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;