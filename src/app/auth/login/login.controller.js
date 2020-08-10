import React from 'react';
import { useForm } from 'react-hook-form';

import LoginView from './login.view';
import { history } from '../../@core';

const EMAIL_PATTERN = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

const FORM_VALIDATION = {
    EMAIL: {
        required: { value: true, message: 'Email is required!' },
        minLength: { value: 5, message: 'Email is too small!' },
        maxLength: { value: 20, message: 'Email is too large!' },
        pattern: { value: EMAIL_PATTERN, message: 'Wrong format!' },
    },
    PASSWORD: {
        required: { value: true, message: 'Password is required!' },
        minLength: { value: 5, message: 'Password is too small!' },
        maxLength: { value: 20, message: 'Password is too large!' },
    },
};

const DEFAULT_VALUES = {
    EMAIL: '',
    PASSWORD: '',
};

export function Login({ modulePath }) {
    const { register: formControl, handleSubmit, errors: formErrors } = useForm({
        defaultValues: {
            email: DEFAULT_VALUES.EMAIL,
            password: DEFAULT_VALUES.PASSWORD,
        },
    });

    const formControls = {
        email: formControl({ ...FORM_VALIDATION.EMAIL }),
        password: formControl({ ...FORM_VALIDATION.PASSWORD }),
    };

    function onProcessLogin(data) {
        console.log('DATA =>', data);
    }

    function goToRegister() {
        history.push(`${modulePath}/register`);
    }

    return <LoginView ctrl={{ formControls, formErrors, handleSubmit, onProcessLogin, goToRegister }} />;
}
