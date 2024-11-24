import React from 'react';
import styles from './PrivacyPolicy.module.sass';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className={styles.privacyPolicy}>
      <h1>Privacy Policy</h1>
      <p>This is the Privacy Policy page. Here, we describe how we handle user data.</p>
    </div>
  );
};

export default PrivacyPolicy;
