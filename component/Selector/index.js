import React from 'react';
import {
  Button, Form, Select, Divider, Icon,
} from 'antd';
import styles from './style/index.less';

export default React.memo(({
  id, form, initialValue, initialObj, list,
  disabled, hide = false, placeholder, labelText, label, selectAll = false, multiple = false,
  required = false, allowClear = true, showSearch = true, rules = [],
  showAdd = false, addItem, addRender,
} = {}) => {
  if (hide) {
    return null;
  }
  const { getFieldDecorator, setFieldsValue } = form;

  let _initialValue = initialValue || (initialObj && initialObj[id]);
  if (multiple && !_initialValue) {
    _initialValue = [];
  }
  if (multiple && Array.isArray(_initialValue) && _initialValue.length > 0) {
    _initialValue = _initialValue.map((x) => `${x}`);
  } else if (_initialValue && !Array.isArray(_initialValue)) {
    _initialValue += '';
  }
  const _labelText = labelText || label;
  const selectorProps = {};

  if (showAdd) {
    Object.assign(selectorProps, {
      dropdownRender: (menu) => (
        <div>
          {menu}
          <Divider style={{ margin: '4px 0' }} />
          {addRender && typeof addRender === 'function' ? addRender() : <div
            style={{ padding: '4px 8px', cursor: 'pointer' }}
            onMouseDown={(e) => e.preventDefault()}
            onClick={addItem}
          >
            <Icon type="plus" /> 新建
          </div>}
        </div>
      ),
    });
  }

  const chooseAll = () => {
    setFieldsValue({
      [id]: [...list.map((resource) => resource.key)],
    });
  };

  return (
    <div className={styles.inlineFormItem}>
      <Form.Item
        label={label}
        className={styles.inline}
        style={required ? {} : { paddingLeft: '10px' }}
      >
        {getFieldDecorator(id, {
          rules: [{ required, message: `请选择${_labelText}` }, ...rules],
          initialValue: _initialValue,
        })(
          <Select
            showSearch={showSearch}
            mode={(selectAll || multiple) ? 'multiple' : 'default'}
            placeholder={placeholder || `请选择${_labelText}`}
            style={{ minWidth: 300, maxWidth: 'calc(100vw - 430px)' }}
            disabled={disabled}
            allowClear={allowClear}
            filterOption={(input, option) => (
              option.props.children.toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            )}
            {...selectorProps}
          >
            {list.map(({ key, label: _label }) => (
              <Select.Option value={key} key={key}>{_label}</Select.Option>
            ))}
          </Select>,
        )}
      </Form.Item>
      {selectAll ? <Button
        style={{ height: 30, margin: 5 }}
        onClick={chooseAll}
        disabled={!list.length || disabled}
      >全选</Button> : null}
    </div>
  );
});
