import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './global.css';
import { YouTubeApiProvider } from './providers/gapi';

ReactDOM.render(
  <React.StrictMode>
    <YouTubeApiProvider>
      <App />
    </YouTubeApiProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
