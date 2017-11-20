import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from "./app"

import { store } from "./store";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
	    <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);