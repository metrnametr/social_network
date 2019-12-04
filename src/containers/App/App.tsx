import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from '../LoginPage';
import SignUpPage from '../SignUpPage';


const App = () => {
  console.log(1);
  return (
    <Router>
      <Switch>
        <Route path="/login" component={ LoginPage } />
        <Route path="/join" component={ SignUpPage } />
      </Switch>
    </Router>
  );
};


export default App;