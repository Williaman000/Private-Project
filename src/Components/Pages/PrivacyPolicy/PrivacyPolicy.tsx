import React from 'react';
import styles from './PrivacyPolicy.module.sass';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className={styles.privacyPolicy}>
      <h1>Privacy Policy</h1>
      <p>Effective Date: November 24, 2024</p>
      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to WillAn's World! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.
        </p>
      </section>
      <section>
        <h2>2. What Information We Collect</h2>
        <ul>
          <li>Personal information you provide: Name, email address, etc.</li>
          <li>Automatically collected information: IP address, browser type, device information.</li>
          <li>Cookies and similar technologies for analytics and preferences.</li>
        </ul>
      </section>
      <section>
        <h2>3. How We Use Your Information</h2>
        <p>
          We use your information to:
        </p>
        <ul>
          <li>Provide and improve our services.</li>
          <li>Respond to your inquiries and support requests.</li>
          <li>Send you updates and promotional content.</li>
        </ul>
      </section>
      <section>
        <h2>4. How We Protect Your Information</h2>
        <p>
          We implement security measures such as encryption, access controls, and regular monitoring to safeguard your data.
        </p>
      </section>
      <section>
        <h2>5. Sharing of Information</h2>
        <p>
          We do not share your personal information with third parties except in the following cases:
        </p>
        <ul>
          <li>When required by law or legal processes.</li>
          <li>With trusted partners who assist in providing our services.</li>
        </ul>
      </section>
      <section>
        <h2>6. Your Rights</h2>
        <p>
          You have the right to:
        </p>
        <ul>
          <li>Access, update, or delete your personal information.</li>
          <li>Opt-out of certain data processing activities.</li>
        </ul>
      </section>
      <section>
        <h2>7. Cookies</h2>
        <p>
          We use cookies to enhance your experience. You can disable cookies in your browser settings.
        </p>
      </section>
      <section>
        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be communicated through our website.
        </p>
      </section>
      <section>
        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@willansworld.com">support@willansworld.com</a>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
