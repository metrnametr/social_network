import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form } from 'antd';
import Input from '../../components/Input';
import Button from '../../components/Button';

import './style.scss';

const LoginForm = (props) => {
  const { t, i18n } = useTranslation();
  console.log(t)
  return (
    <Form>
      <div className="login-container">
        <div className="login_inputs">
          <Input placeholder="login" label="Login" />
          <Input typeInput="password" label="Password" />
        </div>
        <div className="login_buttons">
          <Button type="primary">{t("lng")}</Button>
          <Button type="">Join</Button>
        </div>
      </div>
    </Form>
  );
};

export default LoginForm;