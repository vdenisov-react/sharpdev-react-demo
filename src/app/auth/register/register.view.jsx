import React from 'react';
import './register.styles.scss';

export default ({ ctrl }) => (
    // ##################################################

    <app-register>
        <div className="card border-primary my-5 mx-auto register-form">
            <div className="card-header">Register form</div>

            <div className="card-body">
                <form>
                    {/* EMAIL */}
                    <div className="form-group">
                        <label htmlFor="input-email" className="form-control-label font-weight-bold">
                            Email
                        </label>

                        <input type="text" placeholder="enter email ..." id="input-email" className="form-control" />
                    </div>

                    {/* PASSWORD */}
                    <div className="form-group">
                        <label htmlFor="input-password" className="form-control-label font-weight-bold">
                            Password
                        </label>

                        <input placeholder="enter password ..." id="input-password" className="form-control" />
                    </div>

                    {/* CONFIRM */}
                    <div className="form-group">
                        <label htmlFor="input-confirm" className="form-control-label font-weight-bold">
                            Confirm
                        </label>

                        <input placeholder="confirm password ..." id="input-confirm" className="form-control" />
                    </div>

                    {/* link to "login" */}
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-link" onClick={ctrl.goToLogin}>
                            go to login page
                        </button>
                    </div>

                    {/* REGISTER */}
                    <div className="mt-3 d-flex justify-content-center">
                        <button className="btn btn-success register-button">register</button>
                    </div>
                </form>
            </div>
        </div>
    </app-register>

    // ##################################################
);
