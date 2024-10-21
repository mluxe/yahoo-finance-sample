import {Outlet} from 'react-router-dom';
import {StockSimulationPage} from './pages/stock-simulation.page';

const stocksRoutes = [
  {
    path: 'stocks', element: <Outlet/>,
    children: [
      {path: 'simulation', element: <StockSimulationPage/>},
    ],
  },
];

export default stocksRoutes;
