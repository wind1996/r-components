import React from 'react';
import {
  Layout, Menu, Divider,
} from 'antd';
import { HashRouter as Router, Link, useHistory } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import { name } from '../package.json';

const {
  Content, Footer, Sider,
} = Layout;

const LibLayout = (props) => {
  const { location } = useHistory();
  console.error(1111111111, props, location);

  return <Layout>
    <Sider
      theme="light"
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div
        className="logo"
        style={{
          background: 'rgba(255, 255, 255, 0.2)',
          padding: 16,
          margin: '0 auto',
          textAlign: 'center',
          lineHeight: '32px',
        }}
      >
        <Link to={{
          pathname: '/',
        }}
        >
          {name}
        </Link>
      </div>
      <Divider style={{ margin: '0' }} />
      <Menu mode="inline" defaultSelectedKeys={[location.pathname]}>
        {routes.map((item) => {
          if (item.hidden) {
            return null;
          }
          return (
            <Menu.Item key={item.path}>
              <Link to={{
                pathname: item.path,
              }}
              >
                <span className="nav-text">{item.title}</span>
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
    <Layout style={{ marginLeft: 200 }}>
      {/* <Header style={{background: '#fff', padding: 0}}/> */}
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div style={{ padding: 24, background: '#fff' }}>
          {renderRoutes(routes)}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>;
};

export default () => (
  <Router>
    <LibLayout />
  </Router>
);
