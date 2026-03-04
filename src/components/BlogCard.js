import React from 'react';
import clsx from 'clsx';
import styles from './BlogCard.module.css';
import Link from '@docusaurus/Link';

export default function BlogCard({ title, excerpt, date, image, url }) {
  return (
    <Link to={url} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={image} alt={title} className={styles.image} />
          <div className={styles.glitch}></div>
        </div>
        <div className={styles.content}>
          <div className={styles.date}>{date}</div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.excerpt}>{excerpt}</p>
          <div className={styles.readMore}>READ LOG →</div>
        </div>
      </div>
    </Link>
  );
}
