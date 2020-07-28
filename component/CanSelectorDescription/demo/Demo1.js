import React from 'react';
import { Descriptions } from 'antd';
import CanSelectDescription from '../index';

export default () => (
  <Descriptions title="示例Description" bordered>
    <Descriptions.Item label="XXXX">
      <CanSelectDescription
        allowNull={false}
        list={[{ key: 'key1', label: 'label1' }, { key: 'key2', label: 'label2' }]}
        value="key1"
        disabled={false}
        multiple
        save={(selectIds) => Promise.resolve(selectIds)}
      />
    </Descriptions.Item>
  </Descriptions>
);
