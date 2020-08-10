import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

// core
import { history } from './@core';

// layouts
import { Home, NotFound } from './@layout';

// modules
import AuthModule from './auth/auth.module';
import { Users } from './users/users.controller';
import { Deals } from './deals/deals.controller';

export default () => (
    <Router history={history}>
        <Switch>
            <Route path="/" exact component={Home} />

            {/* <Route path="/auth" component={AuthModule} /> */}
            <Route path="/auth" render={routerProps => <AuthModule {...routerProps} />} />

            <Route path="/deals" component={Deals} />
            <Route path="/users" component={Users} />

            <Route path="/not-found" component={NotFound} />
            <Redirect exact="*" to="/not-found" />
        </Switch>
    </Router>
);
