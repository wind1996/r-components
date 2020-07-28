import React from 'react';
import { Form, Select } from 'antd';
import styles from './style/index.less';
import './style/FormItemLabel.css';

const labelValidator = (label) => (rule, value, callback) => {
  if (!value) {
    callback();
    return;
  }
  if (value.some((tag) => tag.includes(' '))) {
    callback(`${label}每一项不能包含空格`);
  } else {
    callback();
  }
};

export default React.memo(({
  id, form, initialValue, initialObj, disabled, label, placeholder = ['key="label",method="GET"'], required = false,
} = {}) => {
  let _initialValue = initialValue;
  if (initialObj && initialObj[id]) {
    if (Array.isArray(initialObj[id])) {
      _initialValue = initialObj[id];
    } else {
      _initialValue = [initialObj[id]];
    }
  } else if (_initialValue && !Array.isArray(_initialValue)) {
    _initialValue = [_initialValue];
  }
  return (
    <Form.Item
      label={<span style={required ? {} : { paddingLeft: 11 }}>{label}</span>}
      className={styles.inline}
    >
      {form.getFieldDecorator(id, {
        initialValue: _initialValue,
        rules: [
          { required, type: 'array', message: `${label}标签为必填` },
          {
            validator: labelValidator(label),
          },
        ],
      })(
        <Select
          mode="tags"
          className="label-select"
          style={{ width: 320 }}
          tokenSeparators={[',']}
          placeholder={placeholder}
          disabled={disabled}
          dropdownStyle={{ background: 'red', padding: 10, display: 'none' }}
        />,
      )}
    </Form.Item>
  );
});
