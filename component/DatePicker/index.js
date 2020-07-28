import React from 'react';
import {
  DatePicker, Form,
} from 'antd';
import moment from 'moment';
import styles from './style/index.less';

export default React.memo(({
  id, form, initialValue, initialObj, label, placeholder,
  required = false, hide = false, width = 300,
} = {}) => {
  if (hide) {
    return null;
  }

  let _initialValue = initialValue;
  if (initialObj && initialObj[id]) {
    _initialValue = initialObj[id];
  }

  _initialValue = parseInt(_initialValue, 10);

  const { getFieldDecorator } = form;
  return (
    <div className={styles.inlineFormItem}>
      <Form.Item
        label={label}
        className={styles.inline}
        style={required ? {} : { paddingLeft: '10px' }}
      >
        {getFieldDecorator(id, {
          rules: [{ required, message: `请选择${label}` }],
          initialValue: _initialValue ? moment.unix(_initialValue) : undefined,
        })(
          <DatePicker
            showTime
            format="YYYY-MM-DD HH:mm:ss"
            style={{ width }}
            placeholder={placeholder || `请输入${label}`}
          />,
        )}
      </Form.Item>
    </div>
  );
});
