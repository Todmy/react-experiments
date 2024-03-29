import React from 'react';
import ReactDOM from 'react-dom';
import './polyfills';

import App from './App';
import * as serviceWorker from './serviceWorker';
import Apollo from '@/Apollo';

import './index.css';

ReactDOM.render(
  <Apollo>
    <App />
  </Apollo>, document.getElementById('root'));

// TODO
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
