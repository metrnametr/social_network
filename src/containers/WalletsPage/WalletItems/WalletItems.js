import React, { useEffect } from 'react';
import styled from 'styled-components';
import { isEmpty } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../components/Loader';
import WithApi from '../../../common/hoc/WithApi';
import WalletItem from '../WalletItem';
// import AddWalletItem from '../AddWalletItem';
import './style.scss';
import { fetchWallets } from '../../../actions';


const mockWallets = [
  {
    id: '1',
    title: 'My wallet',
    type: 'Наличные',
    balance: 300112,
    typeCurrency: 'dollar'
  }
];

const WalletsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &::after {
      content: "";
      width: 32%;
    }
`;

const WalletItems = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchWallets());
  // }, []);
  const walletsState = useSelector(state => ({
    wallets: state.wallets.wallets,
    loading: state.wallets.loadingWallets
  })) || {};

  if (walletsState.loading && isEmpty(walletsState.wallets)) {
    return <Loader />;
  }

  return (
    <>
      {
        walletsState.wallets.map( (wallet,id) => <WalletItem isEven={ false } key={ id }{ ...wallet }/>
        )
      }
    </>
  );
};

export default WithApi(WalletItems);