import React, { useState } from 'react';
import styles from './Mypage.module.sass';

const MyPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className={styles.myPage}>
      <h1>My Page</h1>
      {isLoggedIn ? (
        <div className={styles.userInfo}>
          <p>Welcome, <strong>{username}</strong>!</p>
          <button className={styles.logoutButton} onClick={handleLogout}>
            Log Out
          </button>
        </div>
      ) : (
        <div className={styles.login}>
          <p>You are not logged in.</p>
          <button className={styles.loginButton} onClick={handleLogin}>
            Log In
          </button>
        </div>
      )}
    </div>
  );
};

export default MyPage;
