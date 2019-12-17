import React,   { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from 'antd';
import WalletsTable from './WalletsTable';
import WalletItems from './WalletItems';
import WalletForm from './WalletForm';
import WalletsFormInit from './WalletsFormInit';
import WalletsChartCurrencyInit from './WalletsChartCurrencyInit';
import CreateWalletButton from '../../components/CreateWalletButton';
import AddWalletItem from './AddWalletItem';

import { useDispatch, useSelector } from 'react-redux';
import { fetchWallets } from '../../actions';
import './style.scss';

const clearTable = false;


const CreateWalletContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute; 
    left:0;
    right:0;
    top:0;
    bottom:0;
`;

const WalletsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 15px;
    &::after {
      content: "";
      width: 32%;
    }
`;

const WalletsPage = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWallets());
  }, []);
  if (clearTable)
    return (
      <CreateWalletContainer>
        <CreateWalletButton />
      </CreateWalletContainer>
    ); 
  else 
    return (
      <>
        <WalletsChartCurrencyInit />
        <WalletsContainer>
          <AddWalletItem />
          <WalletItems />
        </WalletsContainer>
      </>
    );
}; 

export default withRouter(WalletsPage);