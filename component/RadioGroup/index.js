import React from 'react';
import { Form, Radio } from 'antd';
import styles from './style/index.less';

export default React.memo(({
  form, id, label, initialValue, initialObj, disabled = false, required = false, boolean = false,
  rules = [], list = [],
} = {}) => {
  let _list = list;
  if (boolean) {
    _list = [{ key: true, label: ' 是' }, { key: false, label: ' 否' }];
  }
  return (
    <Form.Item
      label={label}
      className={styles.inline}
      style={required ? {} : { paddingLeft: '10px' }}
    >
      {form.getFieldDecorator(id, {
        rules: [{
          required,
          message: `请选择${label}`,
        }, ...rules],
        initialValue: initialValue || (initialObj && initialObj[id]),
      })(
        <Radio.Group disabled={disabled}>
          {_list.map((item) => (<Radio value={item.key} key={item.key}>{item.label}</Radio>))}
        </Radio.Group>,
      )}
    </Form.Item>
  );
});
