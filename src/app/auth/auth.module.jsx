// react/redux
import React from 'react';
import { connect } from 'react-redux';

// third-party
import { get } from 'lodash';

// routing
import RouterOutlet from './auth.routing';
import { history } from '../@core/navigation';

// store
import {
    actionAuthLoginSuccess,
    actionAuthLoginError,
    actionAuthRegisterSuccess,
    actionAuthRegisterError,
    actionAuthGetCurrentUserSuccess,
    actionAuthGetCurrentUserError,
} from '../@core/store/auth';

// services
import { AuthService } from '../@core/api/services';
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
                dispatch(thunkGetCurrentUser());
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
                dispatch(thunkGetCurrentUser());
            })
            .catch(err => {
                const errMsg = err.message || 'Unexpected login error';
                dispatch(actionAuthRegisterError(errMsg));
            });
    };
};

const thunkGetCurrentUser = () => {
    return dispatch => {
        AuthService.getCurrentUser()
            .then(res => {
                const currentUser = get(res, 'data.user_info_token');
                dispatch(actionAuthGetCurrentUserSuccess(currentUser));
                history.push('/');
            })
            .catch(err => {
                const errMsg = err.message || 'Unexpected login error';
                dispatch(actionAuthGetCurrentUserError(errMsg));
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
