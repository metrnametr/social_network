import { combineReducers } from 'redux';

import {
  walletsReducer,
  walletReducer
} from './walletsReducer';


export default combineReducers({
  wallets: walletsReducer,
  wallet: walletReducer
});
