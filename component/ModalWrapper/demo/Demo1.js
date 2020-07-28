import React, { useCallback, useRef } from 'react';
import { Button, Form } from 'antd';
import ModalWrapper from '../index.js';
import Input from '../../Input';
import MyForm from '../../Form';

const submit = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve();
    } else {
      reject();
    }
  }, 1000);
});

@ModalWrapper
class MyFormComponent extends React.Component {
    modalCalledconfirm=() => submit()

    create=(param) => {
      console.log(param);
      return submit();
    }

    render() {
      return (
        <MyForm
          initialValue={() => ({})}
          update={() => Promise.resolve()}
          create={this.create}
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
        </MyForm>
      );
    }
}

@ModalWrapper
@Form.create()
class FormComponent extends React.Component {
    modalCalledconfirm=() => submit()

    render() {
      return (
        <Form>
          antdForm
        </Form>
      );
    }
}

@ModalWrapper
class ModalContent extends React.Component {
    modalCalledconfirm=() => submit()

    render() {
      const { showModalParams: { name } } = this.props;
      return (<div>
        hello {name}
      </div>);
    }
}

export default () => {
  const modalRef = useRef();
  const modalRef2 = useRef();
  const modalRef3 = useRef();
  const onClick = useCallback(() => {
    modalRef.current.show({ name: 'world' }, { title: Math.random() > 0.5 ? 'hello' : '你好' });
  });
  const onClick2 = useCallback(() => {
    modalRef2.current.show({ name: 'world' });
  }); const onClick3 = useCallback(() => {
    modalRef3.current.show({ name: 'world' });
  });
  return (
    <>
      <ModalContent
        ref={modalRef}
        modalConfig={{
          title: '这是标题',
        }}
      />
      <MyFormComponent
        ref={modalRef2}
        modalConfig={{
          title: '这是标题',
        }}
      />
      <FormComponent
        ref={modalRef3}
        modalConfig={{
          title: '这是标题',
        }}
      />
      <Button onClick={onClick}>打开弹窗</Button>
      <Button onClick={onClick2}>打开弹窗2</Button>
      <Button onClick={onClick3}>打开弹窗3</Button>
    </>
  );
};
