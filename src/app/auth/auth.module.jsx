import React from 'react';
import { connect } from 'react-redux';

// routing
import RouterOutlet from './auth.routing';
import { history } from '../@core/navigation';
import {
    actionAuthLoginSuccess,
    actionAuthLoginError,
    actionAuthRegisterSuccess,
    actionAuthRegisterError,
} from '../@core/store/auth';
import { AuthService } from '../@core/api/services';

import { get } from 'lodash';
import { LocalStorageService } from '../@core/services';

function AuthModule({
    ownProps: { match },
    // ---
    onLogin,
    loginError,
    // ---
    onRegister,
    registerError,
}) {
    const modulePath = match.path;

    return (
        <RouterOutlet
            modulePath={modulePath}
            // ---
            onLogin={onLogin}
            loginError={loginError}
            // ---
            onRegister={onRegister}
            registerError={registerError}
        />
    );
}

// ##################################################

const thunkLogin = (email, password) => {
    return dispatch => {
        AuthService.login(email, password)
            .then(res => {
                const token = get(res, 'data.id_token');
                LocalStorageService.set('token', token);
                dispatch(actionAuthLoginSuccess());
                history.push('/');
            })
            .catch(err => {
                const errMsg = err.message || 'Unexpected login error';
                dispatch(actionAuthLoginError(errMsg));
            });
    };
};

const thunkRegister = (email, username, password) => {
    return dispatch => {
        AuthService.register(email, username, password)
            .then(res => {
                const token = get(res, 'data.id_token');
                LocalStorageService.set('token', token);
                dispatch(actionAuthRegisterSuccess());
                history.push('/');
            })
            .catch(err => {
                const errMsg = err.message || 'Unexpected login error';
                dispatch(actionAuthRegisterError(errMsg));
            });
    };
};

// ##################################################

const mapStateToProps = ({ auth: authState }, ownProps) => ({
    ownProps,
    loginError: authState.loginError,
    registerError: authState.registerError,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLogin: (email, password) => {
        return dispatch(thunkLogin(email, password));
    },
    onRegister: (email, username, password) => {
        return dispatch(thunkRegister(email, username, password));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthModule);
