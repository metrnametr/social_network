import React from 'react';
import { Form } from 'antd';
import Input from '../../components/Input';
import Button from '../../components/Button';

import './style.scss';

const SignUpForm = (props) => {
  return (
    <Form>
      <div className="login-container">
        <div className="login_inputs">
          <Input placeholder="login" label="Login" />
          <Input label="Email" />
          <Input typeInput="password" label="Password" />
          <Input typeInput="password" label="Repeat password" />
        </div>
        <div className="login_buttons">
          <Button type="primary">Log In</Button>
          <Button type="">Lets start</Button>
        </div>
      </div>
    </Form>
  );
};

export default SignUpForm;