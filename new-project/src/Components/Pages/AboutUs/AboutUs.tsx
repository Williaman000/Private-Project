import React from 'react';
import styles from './AboutUs.module.sass';

const AboutUs: React.FC = () => {
  return (
    <div className={styles.aboutUs}>
      <h1>About Us</h1>
      <p>
        Welcome to WillAn's world, a platform dedicated to connecting people with the latest and greatest in movies, series, and more.
        Our mission is to provide a seamless, enjoyable experience for entertainment lovers worldwide.
      </p>
      <section>
        <h2>What We Do</h2>
        <p>
          At WillAn's world, we aim to curate popular and trending series and movies, making it easy for you to discover and explore
          your next favorite show or film.
        </p>
      </section>
      <section>
        <h2>Our Values</h2>
        <ul>
          <li>Passion for entertainment</li>
          <li>Commitment to user experience</li>
          <li>Fostering a global community</li>
        </ul>
      </section>
      <section>
        <a href='/contact-us'>
            <h2>Contact Us</h2>
            <p>
                Got questions or feedback? Reach out to us at
                <a href="mailto:support@willansworld.com">support@willansworld.com</a>. We'd love to hear from you!
            </p>
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
