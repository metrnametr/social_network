import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';

import './style.scss';

const CreateWalletContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const TitleButton = styled.span`
    margin-bottom: 10px;
`;

const CreateWalletButton = (props) => {
  return (
    <CreateWalletContainer>
      <TitleButton>You dont have wallet</TitleButton>
      <Link to="/wallets/create"><Button { ...props }>Create wallet</Button></Link>
    </CreateWalletContainer>
  );
};

export default CreateWalletButton;