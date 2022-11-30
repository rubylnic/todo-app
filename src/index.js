import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { rootReducer } from './redux/rootReducer';
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './reset.scss';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(
    // saga
  ),
))

ReactDOM.render(
  // харнилище - стор
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);