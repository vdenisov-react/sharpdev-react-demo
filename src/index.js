import React from 'react';
import ReactDOM from 'react-dom';

// Bootstrap Magic
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
// ---

// App Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/cosmo/bootstrap.min.css';
import './index.css';
// ---

// Service worker
import * as serviceWorker from './utils/serviceWorker';
// ---

import App from './app/App';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
