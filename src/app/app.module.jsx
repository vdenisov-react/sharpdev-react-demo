import React from 'react';

// layouts
import { Header } from './@layout';

// routing
import RouterOutlet from './app.routing';

// store
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { appReducer } from './@core/store/app.reducer';

const appStore = createStore(appReducer);

export default function AppModule() {
    return (
        <Provider store={appStore}>
            {/* --- */}
            <app-root>
                <Header />

                <div className="content">
                    <RouterOutlet />
                </div>
            </app-root>
            {/* --- */}
        </Provider>
    );
}
