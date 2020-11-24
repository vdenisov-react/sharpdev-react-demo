import React from 'react';
import ReactDOM from 'react-dom';

// App Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/cosmo/bootstrap.min.css';
import './styles/styles.scss';
// ---

// Bootstrap Magic
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
// ---

// Service worker
import * as serviceWorker from './utils/serviceWorker';
// ---

// store
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { appReducer } from './app/@store/app.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// ---

import App from './app/app';

const appStore = createStore(appReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

serviceWorker.unregister();
