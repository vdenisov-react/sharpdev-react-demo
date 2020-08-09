import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

// core
import { history } from './@core';

// layouts
import { Header, Home, NotFound } from './@layout';

// modules
import { Auth } from './auth/auth.controller';
import { Users } from './users/users.controller';
import { Deals } from './deals/deals.controller';

function App() {
    return (
        <app-root>
            <Header />

            <div className="content">
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={Home} />

                        <Route path="/auth" component={Auth} />
                        <Route path="/deals" component={Deals} />
                        <Route path="/users" component={Users} />

                        <Route path="/not-found" component={NotFound} />
                        <Redirect exact="*" to="/not-found" />
                    </Switch>
                </Router>
            </div>
        </app-root>
    );
}

export default App;
