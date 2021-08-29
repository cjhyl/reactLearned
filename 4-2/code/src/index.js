import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import pickApple from './stores/pickAppleStore';
import './index.css';

ReactDOM.render(
  <Provider pickApple={pickApple}><App /></Provider>,
  document.getElementById('root')
);

