import React from 'react';
import DealsView from './deals.view';

export function Deals() {
    const pageTitle = 'Deals page';

    return <DealsView ctrl={{ pageTitle }} />;
}
