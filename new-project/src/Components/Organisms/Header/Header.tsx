import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.sass';

const Header: React.FC = () => {
  const [theme, setTheme] = useState<string>('light'); 

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(currentTheme);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to='/'>
          <picture>
            <img src='src/Images/Logo/JunhoAn.png' alt="WillAn's logo" />
          </picture>
        </Link>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/series'>Series</Link></li>
          <li><Link to='/movies'>Movies</Link></li>
          <li><Link to='/mypage'>My Page</Link></li>
        </ul>
      </nav>
      <button className={styles.themeToggle} onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </header>
  );
};

export default Header;
