import React from 'react';
import { Button, Modal } from 'antd';
import PropTypes from 'prop-types';

/* eslint-disable react/jsx-props-no-spreading */
const ModalHoc = (WrappedComponent) => class extends React.PureComponent {
    static displayName = 'ModalHoc';

    static propTypes = {
      title: PropTypes.func, // 获取标题的函数
      footer: PropTypes.bool, // 子组件是否是antForm
      modalConfig: PropTypes.object, // 弹窗的配置函数
      hideCloseBtn: PropTypes.bool, // 隐藏关闭按钮
      cancelType: PropTypes.string, // 取消按钮的type
      cancelText: PropTypes.string, // 取消按钮的文字
      confirmType: PropTypes.string, // 确认按钮的type
      confirmText: PropTypes.string, // 确认按钮的文字
    };

    static defaultProps = {
      title: null,
      footer: true,
      modalConfig: {},
      hideCloseBtn: false,
      cancelType: '',
      confirmType: 'primary',
      cancelText: '关闭',
      confirmText: '确认',
    };

    constructor(props) {
      super(props);
      this.state = {
        visible: false,
        showModalParams: {},
        confirmLoading: false,
        modalConfProps: {},
      };
    }

    show = (showModalParams, modalConfProps = {}) => {
      this.setState({
        visible: true,
        showModalParams,
        modalConfProps,
      });
    };

    getTitle = () => {
      const { title } = this.props;
      if (typeof title === 'function') {
        return title(this.state.showModalParams);
      }
      return '';
    }

    handleCloseModal = (...arg) => {
      const { closeModalCallback } = this.props;
      closeModalCallback && closeModalCallback(...arg);
      this.setState({
        visible: false,
      });
    };

    close = () => {
      const { cancelModalCallback } = this.props;
      this.setState({
        visible: false,
      }, () => {
        if (typeof cancelModalCallback === 'function') {
          cancelModalCallback();
        }
      });
    }

    handleFooterBtnConfirm = () => {
      const ref = WrappedComponent.displayName === 'Form(FormComponent)' ? this.WrappedComponentRef : this.WrappedComponent;
      if (typeof ref.modalCalledconfirm === 'function') {
        const result = ref.modalCalledconfirm();
        if (Object.prototype.toString.call(result) === '[object Promise]') {
          this.setState({
            confirmLoading: true,
          });
          result.then((...res) => {
            this.handleConfirmModal(res);
            this.setState({
              confirmLoading: false,
            });
          }).catch((e) => {
            console.error(e);
            this.setState({
              confirmLoading: false,
            });
          });
        } else {
          this.handleConfirmModal(result);
        }
      } else {
        this.handleConfirmModal();
      }
    }

    handleConfirmModal = (...arg) => {
      const { confirmCallback } = this.props;
      this.setState({
        visible: false,
      }, () => {
        if (typeof confirmCallback === 'function') {
          confirmCallback(...arg);
        }
      });
    };

    renderFooter = () => {
      const {
        footer, cancelType, cancelText, confirmType, confirmText, hideCloseBtn,
      } = this.props;
      if (footer === false) {
        return false;
      }
      if (footer === undefined || footer === true) {
        return (
          <>
            {hideCloseBtn ? null : (
              <Button
                type={cancelType}
                key="back"
                onClick={this.handleCloseModal}
              >{cancelText}</Button>
            )}
            <Button
              type={confirmType}
              key="confirm"
              onClick={this.handleFooterBtnConfirm}
              loading={this.state.confirmLoading}
            >{confirmText}</Button>
          </>
        );
      }
      return footer;
    }

    render() {
      const { visible, showModalParams, modalConfProps } = this.state;
      const {
        modalConfig,
      } = this.props;

      return (
        <Modal
          visible={visible}
          title={this.getTitle()}
          onCancel={this.close}
          destroyOnClose
          width="50%"
          footer={this.renderFooter()}
          {...modalConfig}
          {...modalConfProps}
        >
          <WrappedComponent
            {...this.props}
            ref={(ref) => {
              this.WrappedComponent = ref;
            }}
            wrappedComponentRef={(ref) => {
              this.WrappedComponentRef = ref;
            }}
            confirmModalClick={this.handleConfirmModal}
            closeModalClick={this.handleCloseModal}
            showModalParams={showModalParams}
          />
        </Modal>
      );
    }
};

export default ModalHoc;
