import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import SignUpPage from '../SignUpPage';
import WalletsPage from '../WalletsPage';
import SideBar from '../SideBar';

import TransfersPage from '../TransfersPage';

import Header from '../../components/Header';

import { Layout } from 'antd';


import './style.scss';

const hasLogin = true;

const App = () => {
  return (
    <Router>
      <Layout>
        <Header />
        <Layout style={{ paddingTop: '64px' }}>
        <SideBar />
          <Switch>
            <Layout className="default-layout" style={{ padding: '20px' }}>
            {
              (hasLogin) ? (
                <Layout.Content style={{ background: 'white', padding: '20px', position: 'relative' }}>
                  <Route exact path="/" component={ HomePage } />
                  <Route path="/wallets" component={ WalletsPage } />
                  {/* <Route path="/wallets/update/:id" component={ WalletsPage } /> */}
                  <Route path="/wallets/create" component={ WalletsPage } />
                  <Route path="/transfers" component={ TransfersPage } />
                  <Redirect to="/wallets" />
                </Layout.Content>
              ) : (
                <Layout.Content>
                  <Route path="/login" component={ LoginPage } />
                  <Route path="/join" component={ SignUpPage } />
                  <Redirect to="/login" />
                </Layout.Content>
              ) 
            }
              <Layout.Footer style={{ textAlign: 'center', marginTop: '20px', background: 'white' }}> All Rights is Save YA BLYA BAZARY</Layout.Footer>
            </Layout>
          </Switch>
        </Layout>
      </Layout>
    </Router>
  );
};


export default App;