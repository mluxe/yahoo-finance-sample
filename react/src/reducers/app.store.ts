import {configureStore, createListenerMiddleware} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {stockPriceChangeReducer} from '../yahoo';

const services = [
];

const listenerMiddleware = createListenerMiddleware();


const config = {
  reducer: {
    stockPrice: stockPriceChangeReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      services.map((item) => item.middleware),
    ).prepend(listenerMiddleware.middleware);
  },
};

//check duplicate reducer paths, this is a common issue when we copy paste code
const duplicatedReducerPaths = services.reduce((result, value, index, data) => {
  const idx = data.findIndex((item) => item.reducerPath === value.reducerPath);
  if ( idx !== index){
    result.push({currentIndex: index, firstIndex: idx, reducerPath: value.reducerPath});
  }
  return result;
}, []);

if (duplicatedReducerPaths.length > 0){
  // eslint-disable-next-line no-console
  console.error('** find duplicated service reducers', duplicatedReducerPaths);
}

services.forEach((item) => config.reducer[item.reducerPath] = item.reducer);

const store = configureStore(config);

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
