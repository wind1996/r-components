import React, { useCallback } from 'react';
import { appendQueryParams } from '@/common/utils/routerUtil';
import moment from 'moment';
import { DatePicker } from 'antd';
import styles from '@/components/DevopsComponents/DevOpQueryInput/index.less';

export default ({
  router, startId, endId, extraQuery = { pageNum: 1 }, label,
}) => {
  const { location: { query } } = router;

  const setQuery = useCallback(([startTime, endTime]) => {
    appendQueryParams(router, {
      [startId]: startTime ? startTime.unix() : undefined,
      [endId]: endTime ? endTime.unix() : undefined,
      ...extraQuery,
    });
  }, [query]);

  const value = [];
  if (query[startId]) {
    value.push(moment.unix(query[startId]));
  }
  if (query[endId]) {
    value.push(moment.unix(query[endId]));
  }

  return (
    <div className={styles.item}>
      <span>{label}：</span>
      <DatePicker.RangePicker
        showTime={{
          disabled: true,
          defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('23:59:59', 'HH:mm:ss')],
        }}
        // format="YYYY-MM-DD"
        onChange={setQuery}
        value={value}
        style={{ marginRight: 10 }}
      />
    </div>
  );
};
