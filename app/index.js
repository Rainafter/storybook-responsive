// needed for redux-saga es6 gen support
import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import history from 'utils/history';
// import { loadState } from 'utils/localStorage';

import 'sanitize.css/sanitize.css';

import '!file-loader?name=[name].[ext]!./assets/imgs/favicon.ico';

import App from './pages/App';

import configStore from './configStore';

const initialState = {};
const store = configStore(initialState, history);
const ROOT_NODE = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    ROOT_NODE,
  );
};

render();

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
