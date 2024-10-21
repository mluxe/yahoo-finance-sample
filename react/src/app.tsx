import React from 'react';
import './app.scss';
import {Outlet} from 'react-router-dom';

export function App(){
  return (<>
    <div className='app'>
      <header className='app-body'>
        <div className='App-main-content'>
          <Outlet/>
        </div>
      </header>
    </div>
  </>
  );
}
