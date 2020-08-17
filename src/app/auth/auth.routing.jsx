import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import { history } from '../@core/navigation';

// pages
import { Login } from './login/login.controller';
import { Register } from './register/register.controller';

export default ({
    modulePath,
    // ---
    onLogin,
    loginError,
    // ---
    onRegister,
    registerError,
}) => {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route path={`${modulePath}/login`}>
                        <Login modulePath={modulePath} onLogin={onLogin} loginError={loginError} />
                    </Route>

                    <Route path={`${modulePath}/register`}>
                        <Register modulePath={modulePath} onRegister={onRegister} registerError={registerError} />
                    </Route>

                    <Redirect exact="*" to={`${modulePath}/login`} />
                </Switch>
            </Router>
        </div>
    );
};
