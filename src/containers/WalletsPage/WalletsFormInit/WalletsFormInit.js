import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWallet } from '../../../actions';
import WalletForm from '../WalletForm';
import Loader from '../../../components/Loader';

const WalletsFormInit = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWallet(id));
  }, [id]);

  const walletState = useSelector(state => ({
    wallet: state.wallet.wallet,
    loading: state.wallet.loadingWallet
  }));
  if (walletState.loading) {
    return <Loader />;
  }

  return <WalletForm { ...props } wallet={ walletState.wallet } edit={ true } />;
};

export default WalletsFormInit;