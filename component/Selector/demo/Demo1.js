import React from 'react';
import Selector from '../index';
import Form from '../../Form';

export default () => (
  <>
    <Form
      initialValue={() => ({})}
      update={() => Promise.resolve()}
      create={() => Promise.resolve()}
      defaultValueFunc={() => ({})}
      getFormDefaultValue={() => Promise.resolve({})}
    >
      {({ form }) => (
        <Selector
          list={[{ key: 'key', label: 'label' }, { key: 'key2', label: 'label2' }]}
          id="name"
          label="表单项目标题"
          required
          selectAll
          form={form}
        />
      )}
    </Form>
  </>
);
