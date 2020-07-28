import React from 'react';
import { Button, message, Modal } from 'antd';
import ModalConfirm from '../index';

const sendMessage = () => new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    setTimeout(() => {
      resolve();
    }, 1000);
  } else {
    setTimeout(() => {
      reject();
    }, 1000);
  }
});

export default () => {
  const onClick = () => {
    const arg = 'Promise Resolve arguments';
    // 同样逻辑只需要一行
    ModalConfirm('确定删除XXX', () => sendMessage(arg));
  };

  const onClickPrimary = () => {
    // 修改确认按钮为primary
    const arg = 'Promise Resolve arguments';
    ModalConfirm({
      title: '确定提交XXX',
      okType: 'primary',
    }, () => sendMessage(arg));
  };

  const onClickAntd = () => {
    const arg = 'Promise Resolve arguments';
    // 同样逻辑需要七行
    Modal.confirm({
      title: '确定删除XXX',
      okType: 'danger',
      onOk: () => sendMessage(arg).then(() => {
        message.success('操作成功');
        return Promise.resolve();
      }),
    });
  };

  return (
    <>
      <Button onClick={onClick} type="danger">删除</Button>
      <Button onClick={onClickPrimary} type="primary" style={{ margin: 12 }}>提交</Button>
      <Button onClick={onClickAntd}>删除(直接antd实现)</Button>
    </>
  );
};
