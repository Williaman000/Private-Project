import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.sass';

const NotFound: React.FC = () => {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className={styles.homeLink}>Go Back to Home</Link>
    </div>
  );
};

export default NotFound;
