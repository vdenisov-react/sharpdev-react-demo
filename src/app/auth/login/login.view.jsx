import React from 'react';
import './login.styles.scss';

export default ({ ctrl }) => (
    // ##################################################

    <app-login>
        <div className="card border-primary my-5 mx-auto login-form">
            <div className="card-header">Login form</div>

            <div className="card-body">
                <form onSubmit={ctrl.handleSubmit(ctrl.onProcessLogin)}>
                    {/* EMAIL */}
                    <div className="form-group">
                        <label htmlFor="input-email" className="form-control-label font-weight-bold">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            autoComplete="email"
                            ref={ctrl.formControls.email}
                            id="input-email"
                            className={'form-control' + (ctrl.formErrors.email ? ' is-invalid' : '')}
                            placeholder="enter email ..."
                        />

                        {/* errors */}
                        {ctrl.formErrors.email && <span className="field-error">{ctrl.formErrors.email.message}</span>}
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
                            ref={ctrl.formControls.password}
                            id="input-password"
                            className={'form-control' + (ctrl.formErrors.password ? ' is-invalid' : '')}
                            placeholder="enter password ..."
                        />

                        {/* errors */}
                        {ctrl.formErrors.password && (
                            <span className="field-error">{ctrl.formErrors.password.message}</span>
                        )}
                    </div>

                    {/* link to "register" */}
                    <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-link" onClick={ctrl.goToRegister}>
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
                    {ctrl.loginError && (
                        <div className="mt-3 text-danger">
                            <span className="font-weight-bold">[{'ERROR'}]</span>
                            &nbsp;<span>{ctrl.loginError}</span>
                        </div>
                    )}
                </form>
            </div>
        </div>
    </app-login>

    // ##################################################
);
