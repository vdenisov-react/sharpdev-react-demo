import React from 'react';

// layouts
import { Header } from './@layout';

// routing
import RouterOutlet from './app.routing';

function App() {
    return (
        <app-root>
            <Header />

            <div className="content">
                <RouterOutlet />
            </div>
        </app-root>
    );
}

export default App;
