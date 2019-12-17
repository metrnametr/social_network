import {
  FETCH_WALLETS_REQUEST,
  FETCH_WALLETS_SUCCESS,
  FETCH_WALLETS_FAILURE,
  FETCH_WALLET_REQUEST,
  FETCH_WALLET_SUCCESS,
  FETCH_WALLET_FAILURE
} from '../actions/actionTypes';

const initialState = {
  wallets: [],
  loadingWallets: true,
};

const walletsReducer = (state = initialState, { type, payload }) => {
  switch(type){
  case FETCH_WALLETS_REQUEST: {
    return {
      ...state,
      loadingWallets: true,
    };
  }
  case FETCH_WALLETS_SUCCESS: {
    return {
      ...state,
      loadingWallets: false,
      wallets: [ ...payload.wallets ]
    };
  }
  case FETCH_WALLETS_FAILURE: {
    return {
      ...state,
      loadingWallets: false,
      errorWallets: payload.error
    };
  }
  case FETCH_WALLET_REQUEST: {
    return {
      ...state,
      loadingWallet: true,
    };
  }
  case FETCH_WALLET_SUCCESS: {
    return {
      ...state,
      loadingWallet: false,
      wallet: { ...payload.wallet }
    };
  }
  case FETCH_WALLET_FAILURE: {
    return {
      ...state,
      loadingWallet: false,
      errorWallet: payload.error
    };
  }
  default: return state;
  }
};

const initialWallet = {
  wallet: {},
  loadingWallet: true,
  settigsWalletId: ''
};
const walletReducer = (state = initialWallet, { type, payload }) => {
  switch(type){
  case FETCH_WALLET_REQUEST: {
    return {
      ...state,
      loadingWallet: true,
    };
  }
  case FETCH_WALLET_SUCCESS: {
    return {
      ...state,
      loadingWallet: false,
      wallet: { ...state.wallet, ...payload.wallet }
    };
  }
  case FETCH_WALLET_FAILURE: {
    return {
      ...state,
      loadingWallet: false,
      errorWallet: payload.error
    };
  }
  case 'CLEAR_SETTING_ID': return { ...state, settigsWalletId: '' };
  case 'SET_SETTING_ID': {
    console.log(payload)
    return { ...state, settigsWalletId: payload.id };
  }
  default: return state;
  }
};

export {
  walletsReducer,
  walletReducer
} ;