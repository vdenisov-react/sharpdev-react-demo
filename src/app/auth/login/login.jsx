import React from 'react';
import { useForm } from 'react-hook-form';

import { PATTERN_EMAIL } from '../../@shared/constants';

// styles
import './login.scss';

const FORM_VALIDATION = {
    EMAIL: {
        required: { value: true, message: 'Email is required!' },
        minLength: { value: 5, message: 'Email is too small!' },
        maxLength: { value: 50, message: 'Email is too large!' },
        pattern: { value: PATTERN_EMAIL, message: 'Wrong format!' },
    },
    PASSWORD: {
        required: { value: true, message: 'Password is required!' },
        minLength: { value: 5, message: 'Password is too small!' },
        maxLength: { value: 50, message: 'Password is too large!' },
    },
};

export function Login({ onLogin, errorLogin, goToRegister }) {
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

    return (
        <app-login>
            <div className="card border-primary my-5 mx-auto login-form">
                <div className="card-header">Login form</div>

                <div className="card-body">
                    <form onSubmit={handleSubmit(onProcessLogin)}>
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

                        {/* PASSWORD */}
                        <div className="form-group">
                            <label htmlFor="input-password" className="form-control-label font-weight-bold">
                                Password
                            </label>

                            <input
                                type="password"
                                name="password"
                                autoComplete="current-password"
                                ref={formControls.password}
                                id="input-password"
                                className={'form-control' + (formErrors.password ? ' is-invalid' : '')}
                                placeholder="enter password ..."
                            />

                            {/* errors */}
                            {formErrors.password && <span className="field-error">{formErrors.password.message}</span>}
                        </div>

                        {/* link to "register" */}
                        <div className="d-flex justify-content-center">
                            <button type="button" className="btn btn-link" onClick={goToRegister}>
                                go to register page
                            </button>
                        </div>

                        {/* LOGIN */}
                        <div className="mt-3 d-flex justify-content-center">
                            <button type="submit" className="btn btn-success login-button">
                                login
                            </button>
                        </div>

                        {/* errors */}
                        {errorLogin && (
                            <div className="mt-3 text-danger">
                                <span className="font-weight-bold">[{'ERROR'}]</span>
                                &nbsp;<span>{errorLogin}</span>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </app-login>
    );
}
