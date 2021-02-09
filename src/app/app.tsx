import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

// core
import { history } from './@core/navigation';
// store
import { actionAuthLogout, thunkGetCurrentUser } from './@store/auth';
// services
import { LocalStorageService } from './@core/helpers';

// layouts
import { Header } from './@layout';
import { NotFound } from './@layout';
// pages
import Auth from './auth/auth';
import Deals from './deals/deals';
// icons
import '../utils/fontAwesome';
// styles
import './app.scss';

type Props = {
    isAuth: boolean;
    currentUser: any;
    onGetCurrentUser: () => any;
    onLogout: () => void;
};

const App: React.FC<Props> = ({ isAuth, currentUser, onGetCurrentUser, onLogout }) => {
    useEffect(() => {
        const accessToken = LocalStorageService.get('token');
        if (accessToken) onGetCurrentUser();
    }, [onGetCurrentUser]);

    return (
        <section className="app-root">
            <Header isAuth={isAuth} currentUser={currentUser} onLogout={onLogout} />

            <div className="content">
                <Router history={history}>
                    <Switch>
                        {/* RANDOM GUEST */}
                        {!isAuth && (
                            <Fragment>
                                <Route path="/auth" component={Auth} />
                                <Route path="/" exact={true} render={() => <Redirect to="/auth" />} />
                                {/* <Redirect path="/" exact={true} to="/auth" /> */}
                            </Fragment>
                        )}

                        {/* AUTHORIZED USER */}
                        {isAuth && (
                            <Fragment>
                                <Route path="/deals" component={Deals} />
                                <Route path="/" exact={true} render={() => <Redirect to="/deals" />} />
                                {/* <Redirect path="/" exact={true} to="/deals" /> */}
                            </Fragment>
                        )}
                    </Switch>

                    <Route default={true} component={NotFound} />
                    {/*
                        <Route path="/not-found" component={NotFound} />
                        <Route default={true} render={() => <Redirect to="/not-found" />} />
                    */}
                </Router>
            </div>
        </section>
    );
};

// ##################################################

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    currentUser: state.auth.currentUser,
});

const mapDispatchToProps = (dispatch: any) => ({
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
