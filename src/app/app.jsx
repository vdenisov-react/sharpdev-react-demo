import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

// core
import { history } from './@core/navigation';

// layouts
import { Header } from './@layout';
import { NotFound } from './@layout';

// store
import { actionAuthLogout, thunkGetCurrentUser } from './@core/store/auth';

// services
import { LocalStorageService } from './@core/services';

// pages
import Auth from './auth/auth';
import Deals from './deals/deals';
import { Users } from './users/users';

function App({ isAuth, currentUser, onGetCurrentUser, onLogout }) {
    useEffect(() => {
        const accessToken = LocalStorageService.get('token');
        if (accessToken) onGetCurrentUser();
    }, [onGetCurrentUser]);

    return (
        <app-root>
            <Header isAuth={isAuth} currentUser={currentUser} onLogout={onLogout} />

            <div className="content">
                <Router history={history}>
                    <Switch>
                        {/* RANDOM GUEST */}
                        {!isAuth && (
                            <Fragment>
                                <Route path="/auth" component={Auth} />
                                <Redirect exact="/" to="/auth" />
                            </Fragment>
                        )}

                        {/* AUTHORIZED USER */}
                        {isAuth && (
                            <Fragment>
                                <Route path="/deals" component={Deals} />
                                <Route path="/users" component={Users} />
                                <Redirect exact="/" to="/deals" />
                            </Fragment>
                        )}

                        {/* DEFAULT ROUTES */}
                        <Route path="/not-found" component={NotFound} />
                        <Redirect exact="*" to="/not-found" />
                    </Switch>
                </Router>
            </div>
        </app-root>
    );
}

// ##################################################

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    currentUser: state.auth.currentUser,
});

const mapDispatchToProps = dispatch => ({
    onGetCurrentUser: () => {
        return dispatch(thunkGetCurrentUser());
    },
    onLogout: () => {
        LocalStorageService.del('token');
        history.push('/auth');
        return dispatch(actionAuthLogout());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
