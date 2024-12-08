import React from 'react';
import styles from './Welcome.module.sass';

const Welcome: React.FC = () => {
  return (
    <div className={styles.welcome}>
      <h1>Welcome to WillAn world</h1>
      <p>Explore Series, Movies, and more!</p>
    </div>
  );
};

export default Welcome;
