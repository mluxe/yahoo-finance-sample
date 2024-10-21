import {App} from './app';
import {PageNotFound} from './components/errors/page-not-found';
import {StocksModule} from './stock-module/stocks.module';

const appRoute = [
  {path: '/', element: <App/>, children: [
    {path: '/stocks/*', element: <StocksModule/>},
    // eslint-disable-next-line react/jsx-no-undef
    {path: '*', element: <PageNotFound/>},
  ]},
];

export default appRoute;
