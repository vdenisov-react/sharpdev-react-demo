import React from 'react';
import ReactDOM from 'react-dom';

// Bootstrap Magic
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
// ---

// App Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/cosmo/bootstrap.min.css';
import './styles/styles.scss';
// ---

// Service worker
import * as serviceWorker from './utils/serviceWorker';
// ---

// store
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { appReducer } from './app/@core/store/app.reducer';
// ---

import AppModule from './app/app.module';

const extensionDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const appStore = createStore(appReducer, extensionDevTools);

ReactDOM.render(
    <Provider store={appStore}>
        <AppModule />
    </Provider>,
    document.getElementById('root'),
);

serviceWorker.unregister();
