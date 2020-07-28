import React, { useCallback, useEffect, useState } from 'react';
import {
  Button, Select, message,
} from 'antd';
import style from './style/index.less';

const useLoadingPromise = (fn) => {
  const [loading, setLoading] = useState(false);
  const _fn = (...arg) => new Promise((resolve, reject) => {
    setLoading(true);
    fn(...arg).then(resolve).catch(reject).finally(() => {
      setLoading(false);
    });
  });
  return [loading, _fn];
};

const getValue = (value) => {
  if (Array.isArray(value)) {
    return value.map((x) => `${x}`);
  }
  if (value) {
    return `${value}`;
  }
  return undefined;
};

const ShowSelectedData = React.memo(({
  value, list, activeEditState, disabled,
}) => {
  const idName = list.reduce((pre, cur) => ({ ...pre, [`${cur.key}`]: cur.label }), {});
  let text = '';
  if (Array.isArray(value) && value.length) {
    text = value.map((_id) => (idName[_id] || _id)).join('，');
  } else if (value) {
    text = idName[value] || value;
  }

  if (disabled) {
    return <span>{text}</span>;
  }

  return (
    <span>
      <span>{text}</span>
      <span className={style.btnGroup}>
        <Button size="small" onClick={activeEditState}>编辑</Button>
      </span>
    </span>
  );
});

export default React.memo(({
  list, value, showSearch = true, multiple = false, placeholder,
  allowClear = true, selectorProps = {}, save, allowNull = true, disabled = false,
} = {}) => {
  const [_value, setValue] = React.useState(getValue(value));
  const [editState, setEditState] = React.useState(false);
  const [loading, _save] = useLoadingPromise(save);
  const preValue = React.useRef();

  useEffect(() => {
    setValue(getValue(value));
  }, [value]);

  const saveData = useCallback(() => {
    _save(_value).then(() => {
      message.success('修改成功');
      setEditState(false);
    }).catch((e) => {
      message.error('修改失败');
      // eslint-disable-next-line no-console
      console.error(e);
    });
  }, [_value]);

  const cancelEditState = useCallback(() => {
    setEditState(false);
    setValue(preValue.current);
  }, [editState]);

  const activeEditState = useCallback(() => {
    setEditState(true);
    preValue.current = _value;
  }, [editState, _value]);

  if (!editState) {
    return (<ShowSelectedData
      value={_value}
      list={list}
      activeEditState={activeEditState}
      disabled={disabled}
    />);
  }

  return (
    <div>
      <Select
        showSearch={showSearch}
        mode={(multiple) ? 'multiple' : 'default'}
        placeholder={placeholder}
        style={{ minWidth: 300, maxWidth: 'calc(100vw - 430px)' }}
        allowClear={allowClear}
        filterOption={(input, option) => (
          option.props.children.toLowerCase()
            .indexOf(input.toLowerCase()) >= 0
        )}
        {...selectorProps}
        value={_value}
        onChange={setValue}
      >
        {list.map(({ key, label: _label }) => (
          <Select.Option value={key} key={key}>{_label}</Select.Option>
        ))}
      </Select>
      <span className={style.btnGroup}>
        <Button
          size="small"
          type="primary"
          onClick={saveData}
          loading={loading}
          disabled={!allowNull && (!_value || !(Array.isArray(_value) && _value.length))}
        >保存</Button>
        <Button size="small" onClick={cancelEditState} disabled={loading}>取消</Button>
      </span>
    </div>
  );
});
