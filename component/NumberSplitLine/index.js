import React from 'react';

import { Divider } from 'antd';
import styles from './style/index.less';

export default function ({ index, title, style }) {
  return (
    <div className={styles.container} style={style}>
      <div className={styles.textIndex}>
        {index ? (
          <span className={styles.index}>{index}</span>
        ) : null}
        <span className={styles.title}>{title}</span>
      </div>
      <Divider />
    </div>
  );
}
