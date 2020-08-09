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
                        <Route exact path="/">
                            <Home />
                        </Route>

                        <Route path="/auth">
                            <Auth />
                        </Route>

                        <Route path="/deals">
                            <Deals />
                        </Route>

                        <Route path="/users">
                            <Users />
                        </Route>

                        {/* #################### */}

                        <Route path="/not-found">
                            <NotFound />
                        </Route>

                        <Route path="*">
                            <Redirect to="/not-found" />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </app-root>
    );
}

export default App;
