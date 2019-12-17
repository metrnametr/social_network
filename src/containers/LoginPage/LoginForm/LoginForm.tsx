import React from 'react';
// import { useTranslation, UseTranslationResponse } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Form } from 'antd';
import Input from '../../../components/Input';
import Button from '../../../components/Button';


import './style.scss';
const LoginForm = (props: any) => {
  // const { t } = useTranslation<UseTranslationResponse>();
  return (
    <Form>
      <div className="login-container">
        <div className="login_inputs">
          <Input placeholder="login" label="Login" />
          <Input typeInput="password" label="Password" />
        </div>
        <div className="login_buttons">
          <Button type="primary">{}</Button>
          <Link to="/join">
            <Button type="" className="btn btn-join">Join</Button>
          </Link>
        </div>
      </div>
    </Form>
  );
};

export default LoginForm;