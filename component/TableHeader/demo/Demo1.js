import React, { useCallback, useRef } from 'react';
import { Button } from 'antd';
import TableHeader from '../index';

export default () => (
  <>
    <TableHeader title="这是title" extra="这是额外的" />
    <br />
    <TableHeader title="这是title" extra={<Button type="primary">按钮</Button>} />
  </>
);
