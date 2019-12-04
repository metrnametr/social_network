import React from 'react';
import { Layout, Menu } from 'antd';
import LoginForm from '../LoginForm';
import Header from '../../components/Header';

import './style.scss';

const LoginPage = () => {
  return(
    <Layout>
      <Header />
      <Layout.Content>
        <LoginForm />
      </Layout.Content>
    </Layout>
  );
};

export default LoginPage;