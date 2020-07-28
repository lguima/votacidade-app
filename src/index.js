import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './firebase';

import './scss/custom.scss';
import 'fontawesome.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
