import React from 'react';
import './login.styles.scss';

export default ({ ctrl }) => (
    // ##################################################

    <app-login>
        <div className="card border-primary my-5 mx-auto login-form">
            <div className="card-header">Login form</div>

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

                    {/* link to "register" */}
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-link" onClick={ctrl.goToRegister}>
                            go to register page
                        </button>
                    </div>

                    {/* LOGIN */}
                    <div className="mt-3 d-flex justify-content-center">
                        <button className="btn btn-success login-button">login</button>
                    </div>
                </form>
            </div>
        </div>
    </app-login>

    // ##################################################
);
