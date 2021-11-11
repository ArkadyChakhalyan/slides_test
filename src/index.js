import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './app/app';

ReactDOM.render(
  <React.StrictMode>
    <div className='window'>
      <h1>Ipad presentation</h1>
      <div className='window__app'>
        <App />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
