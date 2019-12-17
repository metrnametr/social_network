import React from 'react';
import { Table } from 'antd';
import styled from 'styled-components';
import Button from '../../../components/Button';
import './style.scss';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  }
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const ButtonPlus = styled(Button)`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: white;
`

const WalletsTable = (props) => {
  return (
    <div>
      <Table dataSource={ dataSource } columns={ columns } />
      <ButtonPlus type="success" shape="circle" icon="plus" />
    </div>
  );
};

export default WalletsTable;
