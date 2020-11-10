import React from 'react';

// styles
import './not-found.scss';

export function NotFound() {
    const pageTitle = '404 Not Found :(';

    return (
        <app-not-found>
            <div className="container">
                <h1>{pageTitle}</h1>
            </div>
        </app-not-found>
    );
}
