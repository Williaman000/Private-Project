import React from 'react';
import './Footer.module.sass';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>© 2024 Netflix Clone. All rights reserved.</p>
        <ul className="footer__links">
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Use</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
