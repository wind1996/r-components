import React from 'react';
import Form from '../index';
import Input from '../../Input';
import DatePicker from '../../DatePicker';
import LabelInput from '../../FormItemLabelInput';
import Selector from '../../Selector';
import RadioGroup from '../../RadioGroup';

export default () => (
  <Form
    initialValue={() => ({})}
    update={() => Promise.resolve()}
    create={() => Promise.resolve()}
    defaultValueFunc={() => ({})}
    getFormDefaultValue={() => Promise.resolve({})}
  >
    {({ form }) => (
      <>
        <Input
          id="id1"
          label="表单项目标题"
          required
          form={form}
        />
        <DatePicker
          id="id2"
          label="开始时间"
          required
          form={form}
        />
        <LabelInput
          id="id3"
          label="表单项目标题"
          required
          form={form}
        />
        <Selector
          list={[{ key: 'key', label: 'label' }, { key: 'key2', label: 'label2' }]}
          id="id4"
          label="表单项目标题"
          required
          form={form}
        />
        <RadioGroup
          list={[{ key: 'key', label: 'label' }, { key: 'key2', label: 'label2' }]}
          id="id5"
          label="表单项目标题"
          required
          form={form}
        />
        <RadioGroup
          boolean
          id="id6"
          label="表单项目标题"
          required
          form={form}
        />
      </>
    )}
  </Form>
);
