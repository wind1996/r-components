import React from 'react';
import { Typography } from 'antd';
import style from './index.less';

export default ({ html, title, showCopy = true }) => (
  <div style={{ padding: 10 }}>
    <div style={{ textAlign: 'left', fontWeight: 'bolder' }}>
      {title ? <span style={{ marginRight: 10 }}>{title}</span> : null}
      {showCopy ? <Typography.Paragraph
        copyable={{ text: html }}
        style={{ display: 'inline' }}
      >复制内容</Typography.Paragraph> : null}
    </div>
    <pre>
      {/* eslint-disable-next-line react/no-danger */}
      <code dangerouslySetInnerHTML={{ __html: html }} className={style.code} />
    </pre>
  </div>
);
