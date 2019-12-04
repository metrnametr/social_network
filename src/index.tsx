import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './main.scss';
import './i18next';

ReactDOM.render(
  <Suspense fallback="loading">
    <App />
  </Suspense>, document.getElementById('root'));