import React, { useState } from 'react';
import styles from './Mypage.module.sass';
import LoginButton from '../../Atoms/LoginButton/LoginButton';

const MyPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (email === 'example@email.com' && password === 'password123') {
      setUsername('John Doe');
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div className={styles.myPage}>
      {!isLoggedIn ? (
        <div className={styles.loginForm}>
          <h1>Login</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <div className={styles.inputGroup}>
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor='password'>Password:</label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <LoginButton label='Log In' />
          </form>
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
