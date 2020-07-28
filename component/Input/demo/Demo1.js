import React from 'react';
import Input from '../index';
import Form from '../../Form';

export default () => (
  <Form
    initialValue={() => ({})}
    update={() => Promise.resolve()}
    create={() => Promise.resolve()}
    defaultValueFunc={() => ({})}
    getFormDefaultValue={() => Promise.resolve({})}
  >
    {({ form }) => (
      <Input
        id="name"
        label="表单项目标题"
        required
        form={form}
      />
    )}
  </Form>
);
