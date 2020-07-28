import { Alert } from 'antd';
import React from 'react';

export default ({ selectedRowKeys, setSelectRowKeys }) => {
  const resetSelect = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setSelectRowKeys([]);
  };
  return (
    <Alert
      style={{ margin: '10px 0' }}
      message={<div>
        <span>已选择 <span style={{ color: '#40a9ff' }}>{selectedRowKeys.length}</span>{' 项'}</span>
        <div className="ant-alert-close-icon"><a onClick={resetSelect}>清空</a></div>
      </div>}
      type="info"
      showIcon
    />
  );
};
