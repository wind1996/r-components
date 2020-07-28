import React from 'react';
import { Form, Input } from 'antd';
import styles from './style/index.less';

export default React.memo(({
  form, id, label, initialValue, initialObj, disabled = false, required = false, hide = false,
  rules = [], placeholder = '', type, textAreaProps = {}, extraNode, width = 300,
} = {}) => {
  if (hide) {
    return null;
  }
  let InputDom = Input;
  if (type === 'textarea') {
    InputDom = Input.TextArea;
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
          message: `请输入${label}`,
        }, ...rules],
        initialValue: initialValue || (initialObj && initialObj[id]),
      })(
        <InputDom
          disabled={disabled}
          style={{ width }}
          placeholder={placeholder || `请输入${label}`}
          {...textAreaProps}
        />,
      )}
      {extraNode || null}
    </Form.Item>
  );
});
