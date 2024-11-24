import React from 'react';
import styles from './Movies.module.sass';

const Movies: React.FC = () => {
  return (
    <div className={styles.movies}>
      <h1>Movies</h1>
      <p>Explore your favorite movies here!</p>
    </div>
  );
};

export default Movies;
