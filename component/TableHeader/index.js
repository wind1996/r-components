import React from 'react';
import styles from './style/index.less';

export default ({ title, extra }) => {
  if (typeof title === 'string') {
    return (
      <div className={styles.twoColumn}>
        <span className={styles.title}>{title}</span>
        <div> {extra}</div>
      </div>
    );
  }
  return (
    <div className={styles.twoColumn}>
      <span className={styles.title}>{React.cloneElement(title)}</span>
      <div> {extra}</div>
    </div>
  );
};
