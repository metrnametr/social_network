import React from 'react';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu'

import './style.scss';


const Header = (props: any) => {
  return (
    <>
      <Layout.Header  className="header">
        <div className="logo"> The Saded</div>
        <Menu
          theme="dark"
          mode="horizontal"
          style={ { lineHeight: '64px' } }
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Layout.Header>
    </>
  );
};

export default Header;