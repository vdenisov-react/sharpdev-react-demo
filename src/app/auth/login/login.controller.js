import React from 'react';
import LoginView from './login.view';
import { history } from '../../@core';

export function Login({ modulePath }) {
    const pageTitle = 'Login page';

    function goToRegister() {
        history.push(`${modulePath}/register`);
    }

    return <LoginView ctrl={{ pageTitle, goToRegister }} />;
}
