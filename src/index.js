import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { rootReducer } from './redux/rootReducer';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import './reset.scss';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(
    // saga
  ),
))

ReactDOM.render(
  // харнилище - стор
  <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  </Provider>,
  document.getElementById('root')
);