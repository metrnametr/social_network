import React from 'react';
import styled from 'styled-components';
import AllChartCurrency from '../../../components/AllChartCurrency';

import './style.scss';

const ChartContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`;

const WalletsChartCurrencyInit = (props) => {
  return (
    <ChartContainer>
      <AllChartCurrency />
    </ChartContainer>
  );
};

export default WalletsChartCurrencyInit;