import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// layouts
import { Header } from './layouts';

// pages
import { Auth, Home, Deals, Users } from './pages';

const hashHistory = createBrowserHistory();

function App() {
    return (
        <div className="app-root">
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
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
