import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// layouts
import { Header, Home, NotFound } from './@layout';

// modules
import { Auth } from './auth/auth.controller';
import { Users } from './users/users.controller';
import { Deals } from './deals/deals.controller';

const hashHistory = createBrowserHistory();

function App() {
    return (
        <app-root>
            <Router history={hashHistory}>
                <Header />

                <div className="content">
                    <Switch>
                        <Route exact path="/" component={Home} />

                        <Route path="/auth" component={Auth} />
                        <Route path="/deals" component={Deals} />
                        <Route path="/users" component={Users} />

                        <Route path="/not-found" component={NotFound} />
                        <Redirect exact="*" to="/not-found" />
                    </Switch>
                </div>
            </Router>
        </app-root>
    );
}

export default App;
