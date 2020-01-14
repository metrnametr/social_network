import React,   { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
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
    // fetchData();
  }, []);
  // const fetchData = async () => {
  //   const post = await axios.get('https://v19.muscdn.com/b09bfee27ccb32147e39b4fc4d538162/5e0a58b7/video/tos/maliva/tos-maliva-v-0068/243a8e4a605a4609adfa9500b8ef26cb/?a=1233&br=1152&bt=576&cr=0&cs=0&dr=0&ds=3&er=&l=201912301406030101151761430A4406A7&lr=tiktok_m&qs=0&rc=anhuMzVyPG1wcjMzNDczM0ApZjk0PGc1NGQ5NzdlZmc0ZmcwYS4xZG0tXy9fLS00MTZzc2I2YDA2MGBhLmNhXmAxY2M6Yw%3D%3D', {
  //     headers: {
  //       'Accept': '*/*',
  //       'Accept-Encoding': 'identity;q=1, *;q=0',
  //       'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uk;q=0.6',
  //       'Connection': 'keep-alive',
  //       'Host': 'v19.muscdn.com',
  //       'Range': 'bytes=0-',
  //       'Sec-Fetch-Mode': 'no-cors',
  //       'Sec-Fetch-Site': 'same-origin',
  //       'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.75 Safari/537.36',
  //       responseType:'stream'
  //     },
  //     httpsAgent: agent,
  //     params: {
  //       br: 1152,
  //       bt: 576,
  //       cr: 0,
  //       cs: 0,
  //       dr: 0,
  //       ds: 3,
  //       er: '',
  //       l: '201912301406030101151761430A4406A7',
  //       lr: 'tiktok_m',
  //       qs: 0,
  //       rc: 'anhuMzVyPG1wcjMzNDczM0ApZjk0PGc1NGQ5NzdlZmc0ZmcwYS4xZG0tXy9fLS00MTZzc2I2YDA2MGBhLmNhXmAxY2M6Yw%3D%3D'
  //     }
      
  //   });
  //   console.log(1);
  //   console.log(post);
  //   console.log(post);
  // };
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