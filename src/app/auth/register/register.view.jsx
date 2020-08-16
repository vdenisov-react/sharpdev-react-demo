import React from 'react';
import './register.styles.scss';

export default ({ ctrl }) => (
    // ##################################################

    <app-register>
        <div className="card border-primary my-5 mx-auto register-form">
            <div className="card-header">Register form</div>

            <div className="card-body">
                <form onSubmit={ctrl.handleSubmit(ctrl.onProcessRegister)}>
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

                    {/* USERNAME */}
                    <div className="form-group">
                        <label htmlFor="input-username" className="form-control-label font-weight-bold">
                            Username
                        </label>

                        <input
                            type="text"
                            name="username"
                            autoComplete="username"
                            ref={ctrl.formControls.username}
                            id="input-username"
                            className={'form-control' + (ctrl.formErrors.username ? ' is-invalid' : '')}
                            placeholder="enter username ..."
                        />

                        {/* errors */}
                        {ctrl.formErrors.username && (
                            <span className="field-error">{ctrl.formErrors.username.message}</span>
                        )}
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

                    {/* CONFIRM */}
                    <div className="form-group">
                        <label htmlFor="input-confirm" className="form-control-label font-weight-bold">
                            Confirm
                        </label>

                        <input
                            type="password"
                            name="confirm"
                            autoComplete="new-password"
                            ref={ctrl.formControls.confirm}
                            id="input-confirm"
                            className={'form-control' + (ctrl.formErrors.confirm ? ' is-invalid' : '')}
                            placeholder="enter confirm ..."
                        />

                        {/* errors */}
                        {ctrl.formErrors.confirm && (
                            <span className="field-error">{ctrl.formErrors.confirm.message}</span>
                        )}
                    </div>

                    {/* link to "login" */}
                    <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-link" onClick={ctrl.goToLogin}>
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
                    {ctrl.registerError && (
                        <div className="mt-3 text-danger">
                            <span className="font-weight-bold">[{'ERROR'}]</span>
                            &nbsp;<span>{ctrl.registerError}</span>
                        </div>
                    )}
                </form>
            </div>
        </div>
    </app-register>

    // ##################################################
);
