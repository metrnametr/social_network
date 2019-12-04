import React from 'react';
import { Layout } from 'antd';
import SignUpForm from '../SignUpForm';
import Header from '../../components/Header';

import './style.scss';

const SignUpPage = () => {
  return(
    <Layout>
      <Header />
      <Layout.Content>
        <SignUpForm />
      </Layout.Content>
    </Layout>
  );
};

export default SignUpPage;