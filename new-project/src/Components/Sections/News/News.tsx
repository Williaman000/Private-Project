import React from 'react';
import styles from './News.module.sass';
import { NewsProps } from '../../../types/News/news';

const News: React.FC<NewsProps> = ({ articles }) => {
  return (
    <section className={styles.news}>
      <a href="/news/" >
        <h2>Latest News</h2>
      </a>
      <ul>
        {articles.map((article, index) => (
          <li key={index} className={styles.article}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default News;
