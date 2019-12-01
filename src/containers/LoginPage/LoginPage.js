import React from 'react';
import { Layout, Menu } from 'antd';
import SignInContainer from '../SignInContainer';

import './style.scss';

const { Header } = Layout;
const LoginPage = () => {
    return(
        <Layout>
            <Header style={{ display: 'flex'}}>
            <div className="logo"> The Saded</div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Layout.Content>
                <SignInContainer />
            </Layout.Content>
        </Layout>
    )
}

export default LoginPage;