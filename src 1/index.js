import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.css";
import App from './App';
import store from './Redux/Store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
