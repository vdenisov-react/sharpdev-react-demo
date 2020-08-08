import React from 'react';
import NotFoundView from './not-found.view';

export function NotFound() {
    const pageTitle = '404 Not Found :(';

    return <NotFoundView ctrl={{ pageTitle }} />;
}
