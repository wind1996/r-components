import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { Select } from 'antd';
import { appendQueryParams } from '@/common/utils/routerUtil';

import styles from './index.less';

const baseStyle = {
  marginRight: 10,
};

export default ({
  router, list, id, extraQuery = { pageNum: 1 }, label, allowClear = true,
  showSearch = true, multiple = false, selectStyle = { width: 180 }, blurTrigger = false,
} = {}) => {
  const { location: { query } } = router;
  const [val, setVal] = useState(query[id]);
  const preValue = useRef(query[id]);

  useEffect(() => {
    if (query[id] !== preValue.current) {
      setVal(query[id]);
      preValue.current = query[id];
    }
  }, [query[id]]);

  const setQuery = useCallback(() => {
    appendQueryParams(router, {
      [id]: val,
      ...extraQuery,
    });
  }, [val, query[id]]);

  const change = useCallback((v) => {
    if (blurTrigger) {
      setVal(v);
      if (!v || (Array.isArray(v) && !v.length)) {
        setQuery();
      }
    } else {
      appendQueryParams(router, {
        [id]: v,
        ...extraQuery,
      });
    }
  }, [setVal]);

  return (
    <div className={styles.item}>
      <span>{label}：</span>
      <Select
        placeholder={`请选择${label}`}
        style={{ ...baseStyle, ...selectStyle }}
        value={val}
        onChange={change}
        allowClear={allowClear}
        mode={multiple ? 'multiple' : 'default'}
        showSearch={showSearch}
        filterOption={(input, option) => (
          option.props.children.toLowerCase()
            .indexOf(input.toLowerCase()) >= 0
        )}
        onBlur={setQuery}
      >
        {list.map(({ key, label: _label }) => (
          <Select.Option
            className={styles.option}
            value={`${key}`}
            key={`${key}`}
          >
            {_label}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};
