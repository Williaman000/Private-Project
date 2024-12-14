import React from 'react';
import styles from './FAQ.module.sass';

import { faqData } from '../../../data/faqData';

const FAQ: React.FC = () => {
  const faqs = faqData;

  return (
    <div className={styles.faq}>
      <h2>Frequently Asked Questions</h2>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>
            <h4>{faq.question}</h4>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
