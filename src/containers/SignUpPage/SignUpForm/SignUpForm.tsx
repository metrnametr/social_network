import React from 'react';
import { Form } from 'antd';
import { Link } from 'react-router-dom';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import './style.scss';

const SignUpForm = (props: any) => {
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
          <Button type="" className="btn btn-success-join">Lets start</Button>
          <div>Have account? <Link to="/login">Login</Link></div>
        </div>
      </div>
    </Form>
  );
};

export default SignUpForm;