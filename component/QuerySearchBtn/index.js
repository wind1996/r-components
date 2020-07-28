import React, { useCallback } from 'react';
import { Button } from 'antd';
import { appendQueryParams, replaceQueryParams } from '@/common/utils/routerUtil';
import styles from './index.less';

export default ({
  router, extraQuery = { pageNum: 1 }, keepQuery = ['pageSize'],
}) => {
  const reset = useCallback(() => {
    replaceQueryParams(router, {
      ...extraQuery,
    }, keepQuery);
  }, []);

  const search = useCallback(() => {
    appendQueryParams(router, {
      ...extraQuery,
      rand: Date.now(),
    });
  }, []);

  return (
    <div className={styles.item}>
      <Button style={{ marginRight: 10 }} onClick={reset}>重置</Button>
      <Button type="primary" onClick={search}>搜索</Button>
    </div>
  );
};
