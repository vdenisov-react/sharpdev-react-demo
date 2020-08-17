import React from 'react';
import { useForm } from 'react-hook-form';

import RegisterView from './register.view';
import { history } from '../../@core/navigation';
import { EMAIL_PATTERN, USERNAME_PATTERN } from '../../@shared/constants';

const FORM_VALIDATION = {
    EMAIL: {
        required: { value: true, message: 'Email is required!' },
        minLength: { value: 5, message: 'Email is too small!' },
        maxLength: { value: 50, message: 'Email is too large!' },
        pattern: { value: EMAIL_PATTERN, message: 'Wrong format!' },
    },
    USERNAME: {
        required: { value: true, message: 'Username is required!' },
        minLength: { value: 3, message: 'Username is too small!' },
        maxLength: { value: 20, message: 'Username is too large!' },
        pattern: { value: USERNAME_PATTERN, message: 'Wrong format!' },
    },
    PASSWORD: {
        required: { value: true, message: 'Password is required!' },
        minLength: { value: 5, message: 'Password is too small!' },
        maxLength: { value: 50, message: 'Password is too large!' },
    },
    CONFIRM: {
        required: { value: true, message: 'You must confirm password!' },
    },
};

export function Register({ modulePath, onRegister, registerError }) {
    const { register: formControl, handleSubmit, errors: formErrors, watch } = useForm({
        defaultValues: { email: '', username: '', password: '', confirm: '' },
    });

    const formControls = {
        email: formControl({ ...FORM_VALIDATION.EMAIL }),
        username: formControl({ ...FORM_VALIDATION.USERNAME }),
        password: formControl({ ...FORM_VALIDATION.PASSWORD }),
        confirm: formControl({
            ...FORM_VALIDATION.CONFIRM,
            validate: val => val === watch('password') || "Passwords don't match!",
        }),
    };

    function onProcessRegister(data) {
        const { email, username, password } = data;
        onRegister(email, username, password);
    }

    function goToLogin() {
        history.push(`${modulePath}/login`);
    }

    return (
        <RegisterView
            ctrl={{
                formControls,
                formErrors,
                registerError,
                // ---
                handleSubmit,
                onProcessRegister,
                goToLogin,
            }}
        />
    );
}
