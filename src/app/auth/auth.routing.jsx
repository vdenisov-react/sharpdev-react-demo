import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import { history } from '../@core/navigation';

// pages
import { Login } from './login/login.controller';
import { Register } from './register/register.controller';

export default ({ modulePath, loginError, onLogin }) => {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route path={`${modulePath}/login`}>
                        <Login modulePath={modulePath} loginError={loginError} onLogin={onLogin} />
                    </Route>

                    <Route path={`${modulePath}/register`}>
                        <Register modulePath={modulePath} onLogin={onLogin} />
                    </Route>

                    <Redirect exact="*" to={`${modulePath}/login`} />
                </Switch>
            </Router>
        </div>
    );
};
