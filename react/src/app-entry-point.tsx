import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import appRoute from './app.route';
import {Provider} from 'react-redux';
import appStore from './reducers/app.store';
import React from 'react';

export function AppEntryPoint(){
  const router = createBrowserRouter(appRoute, {basename: process.env.PUBLIC_URL});

  return (
    <Provider store={appStore}>
      <RouterProvider router={router} fallbackElement={<div>loading....</div>} />
    </Provider>
  );
}
