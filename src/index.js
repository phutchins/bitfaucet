/**
 * Copyright: 2019, Fabric Labs
 */

// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
// import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import createSagaMiddleware from 'redux-saga';

// Assets
import * as state from './settings/state';
import * as serviceWorker from './serviceWorker';
import './index.css';

// Components
import App from './App';
// import reportWebVitals from './reportWebVitals';

// Functions
// import sendToAnalytics from './functions/sendToAnalytics';

// State
import * as initialState from './settings/state';

function reducer (state = initialState, action = { type: 'UNDEFINED_ACTION' }) {
  switch (action.type) {
    case 'SEED_ADDED':
      return {
        seed: state.seed
      };
    case 'RESET':
      return {
        status: 'RESET'
      };
    default:
      return state;
  }
}

// const sagas = createSagaMiddleware();
// const store = createStore(reducer, applyMiddleware(sagas));

// sagas.run(RPCRequest);

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <Provider> */}
      <App state={state} />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// TODO: enable Service Worker by disabling the line below, then test Fabric's
// cache and the `@fabric/core/types/store` class — latest should be completely
// isomorphic, so we're almost fully able to run in the browser now!
serviceWorker.unregister();

// reportWebVitals(sendToAnalytics);
