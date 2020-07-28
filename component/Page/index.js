import React from 'react';
import { Card, PageHeader } from 'antd';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class Page extends React.Component {
  static propTypes = {
    title: PropTypes.oneOfType([React.ReactNode, PropTypes.string]),
    extra: PropTypes.oneOfType([React.ReactNode, null]),
    showGoBackBtn: PropTypes.bool,
  };

  static defaultProps = {
    title: '',
    showGoBackBtn: true,
    extra: null,
  };

  render() {
    const { showGoBackBtn, title, extra } = this.props;
    return (
      <Card
        title={
          <div style={{ margin: '-16px -24px' }}>
            <PageHeader
              ghost={false}
              title={title}
              onBack={showGoBackBtn ? () => window.history.back() : false}
              extra={extra}
            />
          </div>
        }

      >
        {this.props.children}
      </Card>
    );
  }
}
