import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./styles/custom.css";
import "./styles/grid.css";
import App from './App';

import { store } from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

