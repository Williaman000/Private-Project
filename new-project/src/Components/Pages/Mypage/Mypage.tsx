import React, { useState } from "react";
import styles from "./Mypage.module.sass";

const MyPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [username, setUsername] = useState("User"); 

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className={styles.myPage}>
      {!isLoggedIn ? (
        <div className={styles.loggedOut}>
          <h1>My Page</h1>
          <p>You have successfully logged out.</p>
          <button onClick={handleLogin} className={styles.loginButton}>
            Log In Again
          </button>
        </div>
      ) : (
        <div className={styles.loggedIn}>
          <h1>Welcome, {username}!</h1>
          <section>
            <h2>Your Information</h2>
            <p>Email: example@email.com</p>
            <p>Subscription Plan: Premium</p>
          </section>
          <section>
            <h2>Settings</h2>
            <button>Edit Profile</button>
            <button>Change Password</button>
          </section>
          <section>
            <h2>Actions</h2>
            <button onClick={handleLogout} className={styles.logoutButton}>
              Log Out
            </button>
          </section>
        </div>
      )}
    </div>
  );
};

export default MyPage;
