import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import axios from 'axios';

import Loader from '../../components/Loader';

const url = 'http://localhost:3000/wallets';

const WithApi = WappedComponent => props => {
  const [data, setData] = useState([]);
  const [loading, toggleLoading] = useState(false);
  const [error, toggleError] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    toggleLoading(true);
    try {
      const response = await axios.get(url);
      const { data } = response;
      if (!isEmpty(data)) {
        setData(data);
        toggleLoading(false);
      }
    } catch(e) {
      console.log(e);
    }
  };
  if (loading) return <Loader />
  return <WappedComponent loading={ loading } data={ data } { ...props } />;
};

export default WithApi;