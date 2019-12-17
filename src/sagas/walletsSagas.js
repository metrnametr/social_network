import { call, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import {
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
} from '../actions';

import {
  FETCH_WALLETS_REQUEST,
  CREATE_WALLET,
  DELETE_WALLET,
  FETCH_WALLET_REQUEST,
  UPDATE_WALLET
} from '../actions/actionTypes';


function* fetchWalletAsync(data) {
  const { id } = data.payload;
  try{
    const { data } = yield call(axios.get, `http://localhost:3000/wallets/${id}`);
    yield put(fetchWalletSuccess(data));
  } catch(error) {
    yield put(fetchWalletFailure(error));
  }
}


function* fetchWalletsAsync(){
  try{
    const { data } = yield call(axios.get, 'http://localhost:3000/wallets');
    yield put(fetchWalletsSuccess(data));
  } catch(error) {
    yield put(fetchWalletsFailure(error));
  }
}

function* createWalletAsync(data) {
  const { wallet } = data.payload;
  try {
    yield call(axios.post, 'http://localhost:3000/wallets/create', wallet);
    yield put(fetchWallets());
  } catch(error) {
    put(createWalletFailure(error));
  }
}

function* deleteWalletAsync(data) {
  const { id } = data.payload;
  try {
    yield call(axios.delete, `http://localhost:3000/wallets/${id}`);
    yield put(fetchWallets());
  } catch(error) {
    put(deleteWalletFailure(error));
  }
}

function* updateWalletAsync(data){
  const { id, wallet } = data.payload;
  try {
    yield call(axios.put, `http://localhost:3000/wallets/${id}`, wallet);
    yield put(fetchWallets());
  } catch(error) {
    put(updateWalletFailure(error));
  }
}

export function* watchWallets(){
  yield takeLatest(FETCH_WALLETS_REQUEST, fetchWalletsAsync);
}

export function* watchCreateWallet(){
  yield takeLatest(CREATE_WALLET, createWalletAsync);
}


export function* watchDeleteWallet(){
  yield takeLatest(DELETE_WALLET, deleteWalletAsync);
}

export function* watchWallet() {
  yield takeLatest(FETCH_WALLET_REQUEST, fetchWalletAsync);
}

export function* watchUpdateWallet(){
  yield takeLatest(UPDATE_WALLET, updateWalletAsync);
}