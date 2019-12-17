import {
  FETCH_WALLETS_REQUEST,
  FETCH_WALLETS_SUCCESS,
  FETCH_WALLETS_FAILURE,
  FETCH_WALLET_REQUEST,
  FETCH_WALLET_SUCCESS,
  FETCH_WALLET_FAILURE,
  CREATE_WALLET,
  DELETE_WALLET,
  UPDATE_WALLET,
  CREATE_WALLET_FAILURE,
  DELETE_WALLET_FAILURE,
  UPDATE_WALLET_FAILURE
} from './actionTypes';

const fetchWallet = (id) => ({
  type: FETCH_WALLET_REQUEST,
  payload: {
    id
  }
});

const fetchWalletSuccess = (wallet) => ({
  type: FETCH_WALLET_SUCCESS,
  payload: {
    wallet
  }
});

const fetchWalletFailure = (error) => ({
  type: FETCH_WALLET_FAILURE,
  payload: {
    error
  }
});

const fetchWallets = () => ({
  type: FETCH_WALLETS_REQUEST
});

const fetchWalletsSuccess = (wallets) => ({
  type: FETCH_WALLETS_SUCCESS,
  payload: {
    wallets
  }
});

const fetchWalletsFailure = (error) => ({
  type: FETCH_WALLETS_FAILURE,
  payload: {
    error
  }
});

const createWallet = (wallet) => ({
  type: CREATE_WALLET,
  payload: {
    wallet
  }
});

const deleteWallet = (id) => ({
  type: DELETE_WALLET,
  payload: {
    id
  }
});

const updateWallet = (id, wallet) => ({
  type: UPDATE_WALLET,
  payload: {
    id,
    wallet
  }
});

const createWalletFailure = (error) => ({
  type: CREATE_WALLET_FAILURE,
  payload: {
    error
  }
});

const deleteWalletFailure = (error) => ({
  type: DELETE_WALLET_FAILURE,
  payload: {
    error
  }
});

const updateWalletFailure = (error) => ({
  type: UPDATE_WALLET_FAILURE,
  payload: {
    error
  }
});

export {
  fetchWallet,
  fetchWalletSuccess,
  fetchWalletFailure,
  fetchWallets,
  fetchWalletsSuccess,
  fetchWalletsFailure,
  createWallet,
  deleteWallet,
  updateWallet,
  createWalletFailure,
  deleteWalletFailure,
  updateWalletFailure
};