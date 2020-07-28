import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { Input } from 'antd';
import { appendQueryParams } from '@/common/utils/routerUtil';

import styles from './index.less';

const selectStyle = {
  width: 120, marginRight: 10,
};

export default ({
  router, id, extraQuery = { pageNum: 1 }, label, allowClear = false,
}) => {
  const { location: { query } } = router;
  const preValue = useRef(query[id]);
  const [value, setValue] = useState(query[id]);

  useEffect(() => {
    if (query[id] !== preValue.current) {
      setValue(query[id]);
      preValue.current = query[id];
    }
  }, [query[id]]);

  const setQuery = useCallback((_value) => {
    appendQueryParams(router, {
      [id]: _value,
      ...extraQuery,
    });
  }, [query]);

  const valueChange = useCallback((e) => {
    setValue(e.target.value);
    if (!e.target.value) {
      setQuery(undefined);
    }
  });

  const appendQuery = useCallback(() => {
    setQuery(value);
  }, [value]);

  return (
    <div className={styles.item}>
      <span>{label}：</span>
      <Input
        placeholder={`请输入${label}`}
        style={{ ...selectStyle, width: 180 }}
        value={value}
        onChange={valueChange}
        onBlur={appendQuery}
        onPressEnter={appendQuery}
        allowClear={allowClear}
      />
    </div>
  );
};
