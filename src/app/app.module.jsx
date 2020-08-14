import React from 'react';

// store
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { appReducer } from './@core/store/app.reducer';
import AppComponent from './app.component';

const extensionDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const appStore = createStore(appReducer, extensionDevTools);

export default function AppModule() {
    return (
        <Provider store={appStore}>
            <AppComponent />
        </Provider>
    );
}
