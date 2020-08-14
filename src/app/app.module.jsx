import React from 'react';

// layouts
import { Header } from './@layout';

// routing
import RouterOutlet from './app.routing';

// store
import { createStore } from 'redux';
import { appReducer } from './@core/store/app.reducer';

const store = createStore(appReducer);

export default function AppModule() {
    return (
        <app-root>
            <Header />

            <div className="content">
                <RouterOutlet />
            </div>
        </app-root>
    );
}
