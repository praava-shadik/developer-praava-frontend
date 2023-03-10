import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RoutesList from './Components/Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoutesList />
  </React.StrictMode>
);