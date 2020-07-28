import React from 'react';
import style from './index.less';

export default ({ content }) => (
  <div style={{ padding: 10 }} className={style.mdcontainer}>
    {/* eslint-disable-next-line react/no-danger */}
    <code dangerouslySetInnerHTML={{ __html: content }} className={style.code} />
  </div>
);
