import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import { history } from '../@core';

import { AuthLogin } from './pages/auth-login';
import { AuthRegister } from './pages/auth-register';

export default ({ modulePath }) => {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route path={`${modulePath}/login`} component={AuthLogin} />
                    <Route path={`${modulePath}/register`} component={AuthRegister} />

                    <Redirect exact="*" to={`${modulePath}/login`} />
                </Switch>
            </Router>
        </div>
    );
};
