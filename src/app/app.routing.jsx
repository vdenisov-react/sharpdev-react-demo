import React, { Fragment } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

// core
import { history } from './@core/navigation';

// layouts
import { Home, NotFound } from './@layout';

// modules
import AuthModule from './auth/auth.module';
import { Users } from './users/users.controller';
import { Deals } from './deals/deals.controller';

export default ({ isAuth, onLogIn }) => (
    <Router history={history}>
        <Switch>
            {/* RANDOM GUEST */}
            {!isAuth && (
                <Fragment>
                    <Redirect exact="/" to="/auth" />
                    <Route path="/auth" render={routerProps => <AuthModule {...routerProps} onLogIn={onLogIn} />} />
                </Fragment>
            )}

            {/* AUTHORIZED USER */}
            {isAuth && (
                <Fragment>
                    <Route path="/" exact component={Home} />
                    <Route path="/deals" component={Deals} />
                    <Route path="/users" component={Users} />
                </Fragment>
            )}

            {/* DEFAULT ROUTES */}
            <Route path="/not-found" component={NotFound} />
            <Redirect exact="*" to="/not-found" />
        </Switch>
    </Router>
);
