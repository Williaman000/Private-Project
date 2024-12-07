import React, { useState } from 'react';
import styles from './Mypage.module.sass';

const MyPage: React.FC = () => {
  // State to manage login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // State to store username, email, and password inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State to manage error messages
  const [error, setError] = useState("");

  // Simulated login function
  const handleLogin = () => {
    // Check if email and password match the "fake" credentials
    if (email === "example@email.com" && password === "password123") {
      setUsername("John Doe"); // Set username after successful login
      setIsLoggedIn(true); // Switch to logged-in state
      setError(""); // Clear any existing error
    } else {
      // Display error message for invalid credentials
      setError("Invalid email or password. Please try again.");
    }
  };

  // Logout function
  const handleLogout = () => {
    setIsLoggedIn(false); // Switch to logged-out state
    setEmail(""); // Clear email input
    setPassword(""); // Clear password input
    setError(""); // Clear any existing error
  };

  return (
    <div className={styles.myPage}>
      {!isLoggedIn ? (
        // Display login form when the user is not logged in
        <div className={styles.loginForm}>
          <h1>Login</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault(); // Prevent default form submission behavior
              handleLogin(); // Call login function
            }}
          >
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
                required
              />
            </div>
            {error && <p className={styles.error}>{error}</p>} {/* Display error if any */}
            <button type="submit" className={styles.loginButton}>
              Log In
            </button>
          </form>
        </div>
      ) : (
        // Display logged-in view when the user is logged in
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
