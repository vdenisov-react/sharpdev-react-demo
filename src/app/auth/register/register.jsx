import React from 'react';
import { useForm } from 'react-hook-form';

import { PATTERN_EMAIL, PATTERN_USERNAME } from '../../@shared/constants';

// styles
import './register.scss';

const FORM_VALIDATION = {
    EMAIL: {
        required: { value: true, message: 'Email is required!' },
        minLength: { value: 5, message: 'Email is too small!' },
        maxLength: { value: 50, message: 'Email is too large!' },
        pattern: { value: PATTERN_EMAIL, message: 'Wrong format!' },
    },
    USERNAME: {
        required: { value: true, message: 'Username is required!' },
        minLength: { value: 3, message: 'Username is too small!' },
        maxLength: { value: 20, message: 'Username is too large!' },
        pattern: { value: PATTERN_USERNAME, message: 'Wrong format!' },
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

export function Register({ onRegister, errorRegister, goToLogin }) {
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

    return (
        <app-register>
            <div className="card border-primary my-5 mx-auto register-form">
                <div className="card-header">Register form</div>

                <div className="card-body">
                    <form onSubmit={handleSubmit(onProcessRegister)}>
                        {/* EMAIL */}
                        <div className="form-group">
                            <label htmlFor="input-email" className="form-control-label font-weight-bold">
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                autoComplete="email"
                                ref={formControls.email}
                                id="input-email"
                                className={'form-control' + (formErrors.email ? ' is-invalid' : '')}
                                placeholder="enter email ..."
                            />

                            {/* errors */}
                            {formErrors.email && <span className="field-error">{formErrors.email.message}</span>}
                        </div>

                        {/* USERNAME */}
                        <div className="form-group">
                            <label htmlFor="input-username" className="form-control-label font-weight-bold">
                                Username
                            </label>

                            <input
                                type="text"
                                name="username"
                                autoComplete="username"
                                ref={formControls.username}
                                id="input-username"
                                className={'form-control' + (formErrors.username ? ' is-invalid' : '')}
                                placeholder="enter username ..."
                            />

                            {/* errors */}
                            {formErrors.username && <span className="field-error">{formErrors.username.message}</span>}
                        </div>

                        {/* PASSWORD */}
                        <div className="form-group">
                            <label htmlFor="input-password" className="form-control-label font-weight-bold">
                                Password
                            </label>

                            <input
                                type="password"
                                name="password"
                                autoComplete="new-password"
                                ref={formControls.password}
                                id="input-password"
                                className={'form-control' + (formErrors.password ? ' is-invalid' : '')}
                                placeholder="enter password ..."
                            />

                            {/* errors */}
                            {formErrors.password && <span className="field-error">{formErrors.password.message}</span>}
                        </div>

                        {/* CONFIRM */}
                        <div className="form-group">
                            <label htmlFor="input-confirm" className="form-control-label font-weight-bold">
                                Confirm
                            </label>

                            <input
                                type="password"
                                name="confirm"
                                autoComplete="new-password"
                                ref={formControls.confirm}
                                id="input-confirm"
                                className={'form-control' + (formErrors.confirm ? ' is-invalid' : '')}
                                placeholder="enter confirm ..."
                            />

                            {/* errors */}
                            {formErrors.confirm && <span className="field-error">{formErrors.confirm.message}</span>}
                        </div>

                        {/* link to "login" */}
                        <div className="d-flex justify-content-center">
                            <button type="button" className="btn btn-link" onClick={goToLogin}>
                                go to login page
                            </button>
                        </div>

                        {/* REGISTER */}
                        <div className="mt-3 d-flex justify-content-center">
                            <button type="submit" className="btn btn-success register-button">
                                register
                            </button>
                        </div>

                        {/* errors */}
                        {errorRegister && (
                            <div className="mt-3 text-danger">
                                <span className="font-weight-bold">[{'ERROR'}]</span>
                                &nbsp;<span>{errorRegister}</span>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </app-register>
    );
}
