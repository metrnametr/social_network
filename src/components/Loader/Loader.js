import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';


const LoaderContainer = styled.div`
    width: 100%;
    text-align: center;
`;
const Loader = () => (
  <LoaderContainer>
    <Spin />
  </LoaderContainer>
);


export default Loader;