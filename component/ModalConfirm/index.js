import { message, Modal } from 'antd';

export default (modalConfig = '', promise) => {
  let _modalConfig = {};
  if (typeof modalConfig === 'object') {
    _modalConfig = modalConfig;
  } else if (typeof modalConfig === 'string') {
    _modalConfig = {
      title: modalConfig,
    };
  } else {
    throw Error('参数类型不正确');
  }

  Modal.confirm({
    // eslint-disable-next-line consistent-return
    onOk: () => new Promise((resolve, reject) => {
      const opRes = promise();
      if (opRes && typeof opRes.then === 'function' && typeof opRes.catch === 'function') {
        return opRes.then((..._arg) => {
          if (modalConfig.successMessage !== false) {
            message.success('操作成功');
          }
          resolve(..._arg);
        }).catch(reject);
      }
      resolve();
    }),
    ..._modalConfig,
    okType: _modalConfig.okType || 'danger',
  });
};
