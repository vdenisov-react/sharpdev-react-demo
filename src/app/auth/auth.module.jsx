import React from 'react';
import { connect } from 'react-redux';

// routing
import RouterOutlet from './auth.routing';
import { history } from '../@core/navigation';
import { actionAuthLoginSuccess, actionAuthLoginError } from '../@core/store/auth';
import { AuthService } from '../@core/api/services';

import { get } from 'lodash';
import { LocalStorageService } from '../@core/services';

function AuthModule({ ownProps: { match }, loginError, onLogin }) {
    const modulePath = match.path;

    return <RouterOutlet modulePath={modulePath} loginError={loginError} onLogin={onLogin} />;
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

// ##################################################

const mapStateToProps = ({ auth: authState }, ownProps) => ({
    ownProps,
    loginError: authState.loginError,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLogin: (email, password) => dispatch(thunkLogin(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthModule);
