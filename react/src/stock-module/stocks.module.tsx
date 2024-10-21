import stocksRoutes from './stocks.route';
import {useRoutes} from 'react-router-dom';
import React from 'react';

type StocksModuleProps = {

}

export function StocksModule(props: StocksModuleProps) {
  const routes = useRoutes(stocksRoutes);
  return (
    <div className='tab-pane fade show active' style={{'padding': '1rem 0'}}>
      {routes}
    </div>
  );
}
