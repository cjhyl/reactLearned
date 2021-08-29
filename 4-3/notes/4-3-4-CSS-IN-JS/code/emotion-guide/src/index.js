import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const theme = {
  colors: {
    red: '#f00',
    green: '#0f0',
    blue: '#00f'
  }
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
  ,
  document.getElementById('root')
);