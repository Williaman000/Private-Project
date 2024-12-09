import React from 'react';
import styles from './CallToAction.module.sass';

const CallToAction: React.FC = () => {
  return (
    <div className={styles.callToAction}>
      <h2>Ready to Explore?</h2>
      <p>Sign up today and unlock exclusive features!</p>
      <button>Join Now</button>
    </div>
  );
};

export default CallToAction;
