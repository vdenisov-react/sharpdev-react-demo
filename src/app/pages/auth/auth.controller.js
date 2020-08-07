import React from 'react';
import AuthView from './auth.view';

export function Auth() {
    const pageTitle = 'Auth page';

    return <AuthView ctrl={{ pageTitle }} />;
}
