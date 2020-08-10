import React from 'react';

// layouts
import { Header } from './@layout';

// routing
import RouterOutlet from './app.routing';

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
