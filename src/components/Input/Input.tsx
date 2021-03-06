import React from 'react';
import AntdInput from 'antd/lib/input';
import './style.scss';

const { Password, Search, TextArea  } = AntdInput;

const Input = (props: any) => {
  const { typeInput } = props;
  switch(typeInput) {
  case 'search': return <Search { ...props } />;
  case 'password': return <Password { ...props } />;
  case 'TextArea': return <TextArea { ...props } />;
  default: return <AntdInput { ...props } />;
  }
};

const InputWithLabel = (props: any) => {
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
