import React from 'react';
import { useForm } from 'react-hook-form';

import LoginView from './login.view';
import { history } from '../../@core';

export function Login({ modulePath }) {
    const { register: formControl, handleSubmit } = useForm();

    const formGroup = {
        email: formControl(),
        password: formControl(),
    };

    function onProcessLogin(data) {
        console.log('DATA =>', data);
    }

    function goToRegister() {
        history.push(`${modulePath}/register`);
    }

    return <LoginView ctrl={{ formGroup, handleSubmit, onProcessLogin, goToRegister }} />;
}
