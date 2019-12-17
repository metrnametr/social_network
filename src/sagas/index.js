import { fork, all } from 'redux-saga/effects';
import {
  watchWallets,
  watchWallet,
  watchCreateWallet,
  watchDeleteWallet,
  watchUpdateWallet
} from './walletsSagas';

export default function* rootSaga() {
  yield all(
    [
      fork(watchWallets),
      fork(watchCreateWallet),
      fork(watchDeleteWallet),
      fork(watchWallet),
      fork(watchUpdateWallet)
    ]
  );
}