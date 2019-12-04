import React from 'react';
import { Button as AntdButton } from 'antd';

import './style.scss';

const Button = (props) => <AntdButton { ...props }>{props.children}</AntdButton>;

export default Button;