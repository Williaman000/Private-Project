import React from 'react';
import styles from './FAQ.module.sass';

const FAQ: React.FC = () => {
  const faqs = [
    { question: 'What is WillAn World?', answer: 'WillAn World is a platform for exploring movies and series.' },
    { question: 'Is it free to use?', answer: 'Yes, our basic services are free to use.' },
    { question: 'How can I contact support?', answer: 'You can reach us at support@willansworld.com.' },
  ];

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
