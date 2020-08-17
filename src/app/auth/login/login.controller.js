import React from 'react';
import { useForm } from 'react-hook-form';

import LoginView from './login.view';
import { history } from '../../@core/navigation';
import { EMAIL_PATTERN } from '../../@shared/constants';

const FORM_VALIDATION = {
    EMAIL: {
        required: { value: true, message: 'Email is required!' },
        minLength: { value: 5, message: 'Email is too small!' },
        maxLength: { value: 50, message: 'Email is too large!' },
        pattern: { value: EMAIL_PATTERN, message: 'Wrong format!' },
    },
    PASSWORD: {
        required: { value: true, message: 'Password is required!' },
        minLength: { value: 5, message: 'Password is too small!' },
        maxLength: { value: 50, message: 'Password is too large!' },
    },
};

export function Login({ modulePath, loginError, onLogin }) {
    const { register: formControl, handleSubmit, errors: formErrors } = useForm({
        defaultValues: { email: '', password: '' },
    });

    const formControls = {
        email: formControl({ ...FORM_VALIDATION.EMAIL }),
        password: formControl({ ...FORM_VALIDATION.PASSWORD }),
    };

    function onProcessLogin(data) {
        const { email, password } = data;
        onLogin(email, password);
    }

    function goToRegister() {
        history.push(`${modulePath}/register`);
    }

    return (
        <LoginView
            ctrl={{
                formControls,
                formErrors,
                loginError,
                // ---
                handleSubmit,
                onProcessLogin,
                goToRegister,
            }}
        />
    );
}
