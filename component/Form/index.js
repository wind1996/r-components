import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Divider, Form, message,
} from 'antd';
import styles from './style/index.less';

@Form.create()
class MyForm extends React.Component {
  static displayName='MyForm'

  static propTypes = {
    update: PropTypes.func.isRequired,
    create: PropTypes.func.isRequired,
    getFormDefaultValue: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    btnAlign: PropTypes.oneOf(['left', 'right', 'center']),
    defaultValueFunc: PropTypes.func.isRequired,
    query: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.string]),
    getDefault: PropTypes.bool,
    coverDefault: PropTypes.bool,
    okText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    cancelText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    useModalSubmit: PropTypes.bool,
  };

  static defaultProps={
    onCancel: () => {},
    query: {},
    btnAlign: 'right',
    getDefault: false,
    coverDefault: true,
    useModalSubmit: false,
    okText: '确认',
    cancelText: '取消',
  }

  constructor(props) {
    super(props);
    this.state = {
      modify: !!this.props.query.id,
      confirmLoading: false,
      setValueFromPort: false,
      initialValue: props.defaultValueFunc(),
    };
  }

  componentDidMount() {
    const { getDefault } = this.props;
    const { modify } = this.state;
    if (modify || getDefault) {
      this.getFormDataFromPort();
    }
  }

  modalCalledconfirm=() => {
    const { useModalSubmit } = this.props;
    if (useModalSubmit) {
      return this.submit();
    }
  }

  getFormDataFromPort = () => {
    const { query, getFormDefaultValue, coverDefault } = this.props;
    this.setState({
      setValueFromPort: true,
    });
    getFormDefaultValue(query)
      .then((initialValue) => {
        this.setState((preState) => {
          if (coverDefault) {
            return { initialValue };
          }
          return {
            initialValue: {
              ...preState.initialValue,
              ...initialValue,
            },
          };
        }, () => {
          this.setState({
            // setValueFromPort: false,
          });
        });
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.error(e);
        message.error('获取报警规则默认配置失败');
        this.setState({
          setValueFromPort: false,
        });
      });
  };

  submit = () => {
    this.props.form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.setState({
        confirmLoading: true,
      });

      const func = this.state.modify ? this.props.update : this.props.create;

      const submitPromise = func(values);
      if (typeof submitPromise === 'object'
        && typeof submitPromise.then === 'function'
        && typeof submitPromise.catch === 'function') {
        submitPromise.then((...arg) => {
          message.success('操作成功');
          this.setState({
            confirmLoading: false,
          });
          this.cancel(this.state.modify ? 'update' : 'create', ...arg);
        })
          .catch((e) => {
            this.setState({
              confirmLoading: false,
            });
            message.error((e && e.message) || '操作失败');
          });
      } else {
        this.setState({
          confirmLoading: false,
        });
      }
    });
  };

  cancel = (...arg) => {
    const { onCancel } = this.props;
    onCancel(...arg);
  };

  render() {
    const {
      children, btnAlign, okText, cancelText,
    } = this.props;
    const props = {
      confirmLoading: this.state.confirmLoading,
      initialValue: this.state.initialValue,
      setValueFromPort: this.state.setValueFromPort,
      modify: this.state.modify,
      form: this.props.form,
    };
    return (
      <Form>
        {typeof children === 'function'
          ? children(props)
          : React.Children.map(children, (child) => React.cloneElement(child, props))}
        <Divider style={{ marginBottom: 8 }} />
        <div className={styles.btnGroup} data-align={btnAlign}>
          {cancelText ? <Button onClick={this.cancel}>{cancelText}</Button> : null}
          {okText ? <Button
            onClick={this.submit}
            type="primary"
            loading={this.state.confirmLoading}
          >{okText}</Button> : null}
        </div>
      </Form>
    );
  }
}

export default MyForm;
