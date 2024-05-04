import React from 'react';
import './box.scss';
import BoxChart from '../../components/box/box';
import ChartComponent from '../../components/chart/chart';

export default () => (
  <React.Fragment>
    {window.location.toString().split('/').pop() === "Alle" ? <ChartComponent />: 
    <BoxChart boxId={window.location.toString().split('/').pop()} />
  }

    
  </React.Fragment>
);
