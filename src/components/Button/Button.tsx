import * as React from 'react';
import AntdButton from 'antd/lib/button';
import './style.scss';

const Button = (props: any) => <AntdButton { ...props }>{props.children}</AntdButton>;

export default Button;