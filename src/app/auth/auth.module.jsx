import React from 'react';

// routing
import RouterOutlet from './auth.routing';

export default function AuthModule({ match, onLogIn }) {
    const modulePath = match.path;

    return <RouterOutlet modulePath={modulePath} onLogIn={onLogIn} />;
}
