import React from 'react';
import { Input as AntdInput } from 'antd';

import './style.scss';

const { Group, Password, Search, TextArea  } = AntdInput;

const Input = (props) => {
  const { typeInput } = props;
  switch(typeInput) {
  case 'search': return <Search { ...props } />;
  case 'password': return <Password { ...props } />;
  case 'TextArea': return <TextArea { ...props } />;
  default: return <AntdInput { ...props } />;
  }
};

const InputWithLabel = (props) => {
  const { label } = props;
  return (
    <div className="input-container">
      <div className="input-label">
        { label }
      </div>
      <Input { ...props } />
    </div>
  );
};

export {
  InputWithLabel
};
