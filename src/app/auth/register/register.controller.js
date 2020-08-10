import React from 'react';
import RegisterView from './register.view';
import { history } from '../../@core';

export function Register({ modulePath }) {
    const pageTitle = 'Register page';

    function goToLogin() {
        history.push(`${modulePath}/login`);
    }

    return <RegisterView ctrl={{ pageTitle, goToLogin }} />;
}
