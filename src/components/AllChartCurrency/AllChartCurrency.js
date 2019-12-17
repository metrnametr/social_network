import React from 'react';
import ReactMinimalPieChart from 'react-minimal-pie-chart';

import './style.scss';

const data = [
  {
    color: '#E38627',
    title: 'One',
    value: 20
  },
  {
    color: '#C13C37',
    title: 'Two',
    value: 20
  },
  {
    color: '#6A2135',
    title: 'Three',
    value: 20
  },
  {
    color: '#008B8B',
    title: 'Three',
    value: 20
  }
];
const AllChartCurrency = (props) => {
  return (
    <ReactMinimalPieChart
      style={ { width: '25%' } }
      animate={ true }
      animationDuration={ 500 }
      animationEasing="ease-out"
      cx={ 50 }
      cy={ 50 }
      data={ data }
      label
      labelPosition={ 0 }
      labelStyle={ {
        fontFamily: 'sans-serif',
        fontSize: '25px'
      } }
      lengthAngle={ 360 }
      lineWidth={ 15 }
      onClick={ undefined }
      onMouseOut={ undefined }
      onMouseOver={ undefined }
      paddingAngle={ 5 }
      radius={ 50 }
      rounded={ false }
      startAngle={ 0 }
      viewBoxSize={ [
        100,
        100
      ] }
    />
  );
};

export default AllChartCurrency;