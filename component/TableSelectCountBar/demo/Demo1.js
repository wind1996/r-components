import React, { useCallback, useState } from 'react';
import { Button } from 'antd';
import TableSelectCounterBar from '../index';

export default () => {
  const [selectedRowKeys, setSelectRowKeys] = useState([]);
  const onClick = useCallback(() => {
    setSelectRowKeys((selectKeys) => [...selectKeys, Date.now()]);
  }, [selectedRowKeys]);
  return (
    <>
      <TableSelectCounterBar
        selectedRowKeys={selectedRowKeys}
        setSelectRowKeys={setSelectRowKeys}
      />
      <Button onClick={onClick}>增加</Button>
    </>
  );
};
