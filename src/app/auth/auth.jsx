import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

// core
import { history } from '../@core/navigation';

// store
import { thunkLogin, thunkRegister } from '../@core/store/auth';

// pages
import { Login } from './login/login.controller';
import { Register } from './register/register.controller';

function Auth({
    onLogin,
    errorLogin,
    // ---
    onRegister,
    errorRegister,
}) {
    const modulePath = '/auth';

    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route path={`${modulePath}/login`}>
                        <Login modulePath={modulePath} onLogin={onLogin} errorLogin={errorLogin} />
                    </Route>

                    <Route path={`${modulePath}/register`}>
                        <Register modulePath={modulePath} onRegister={onRegister} errorRegister={errorRegister} />
                    </Route>

                    <Redirect exact="*" to={`${modulePath}/login`} />
                </Switch>
            </Router>
        </div>
    );
}

// ##################################################

const mapStateToProps = ({ auth: authState }) => ({
    errorLogin: authState.errorLogin,
    errorRegister: authState.errorRegister,
});

const mapDispatchToProps = dispatch => ({
    onLogin: (email, password) => {
        return dispatch(thunkLogin(email, password));
    },
    onRegister: (email, username, password) => {
        return dispatch(thunkRegister(email, username, password));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
