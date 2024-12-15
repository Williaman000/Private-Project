import React from 'react';
import CTAButton from '../../Atoms/CTAButton/CTAButton'; 
import styles from './CallToAction.module.sass';

const CallToAction: React.FC = () => {
  const handleCTAClick = () => {
    alert('Action initiated! 🚀');
  };

  return (
    <section className={styles.callToAction}>
      <h2>Don't Miss Out!</h2>
      <p>Sign up today and start enjoying our amazing features!</p>
      <div className={styles.button_area}>
        <CTAButton label="Get Started" onClick={handleCTAClick} />
      </div>
    </section>
  );
};

export default CallToAction;
