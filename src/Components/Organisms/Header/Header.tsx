import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.sass';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src="/images/netflix-logo.png" alt="logo" />
        </Link>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/series">Series</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/mypage">My Page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
