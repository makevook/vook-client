import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const body = document.querySelector('body') as HTMLBodyElement;
const contentProvider = document.createElement('div');
contentProvider.id = 'content-provider';

body.prepend(contentProvider);

ReactDOM.createRoot(document.getElementById('content-provider') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
