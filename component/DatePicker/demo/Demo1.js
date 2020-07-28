import React from 'react';
import DatePicker from '../index';
import Form from '../../Form';

export default () => (
  <>
    <Form
      initialValue={() => ({})}
      update={() => Promise.resolve()}
      create={(params) => {
        console.log(params);
        return Promise.resolve();
      }}
      defaultValueFunc={() => ({})}
      getFormDefaultValue={() => Promise.resolve({})}
    >
      {({ form }) => (
        <DatePicker
          id="name"
          label="开始时间"
          required
          form={form}
        />
      )}
    </Form>
  </>
);
