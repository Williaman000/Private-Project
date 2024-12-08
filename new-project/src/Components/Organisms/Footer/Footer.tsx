import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.sass';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2024 WillAn's world. All rights reserved.</p>
      <ul className={styles.links}>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/terms-of-use">Terms of Use</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
