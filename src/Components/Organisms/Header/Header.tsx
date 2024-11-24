import React from 'react';
import './Header.module.sass';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img
          src="/images/netflix-logo.png"
          alt="Netflix Logo"
          className="header__logo-img"
        />
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item"><a href="/">Home</a></li>
          <li className="header__nav-item"><a href="/series">Series</a></li>
          <li className="header__nav-item"><a href="/movies">Movies</a></li>
          <li className="header__nav-item"><a href="/new">New & Popular</a></li>
          <li className="header__nav-item"><a href="/mylist">My List</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
