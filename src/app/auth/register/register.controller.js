import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { get } from 'lodash';

import RegisterView from './register.view';
import { history } from '../../@core/navigation';
import { EMAIL_PATTERN, USERNAME_PATTERN } from '../../@shared/constants';

// services
import { LocalStorageService } from '../../@core/services';
import { AuthService } from '../../@core/api/services';

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

export function Register({ modulePath, onLogIn }) {
    // services
    const authService = new AuthService();
    const localStorageService = new LocalStorageService();
    // ---

    const { register: formControl, handleSubmit, errors: formErrors, watch } = useForm({
        defaultValues: { email: '', username: '', password: '', confirmation: '' },
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

    const [registerError, setRegisterError] = useState('');

    function onProcessRegister(data) {
        const { email, username, password } = data;
        authService
            .register(email, username, password)
            .then(res => {
                const token = get(res, 'data.id_token') || null;
                if (token) {
                    localStorageService.set('token', token);
                    setRegisterError('');
                    onLogIn();
                }
            })
            .catch(err => setRegisterError(err.message || 'Unexpected login error'));
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
