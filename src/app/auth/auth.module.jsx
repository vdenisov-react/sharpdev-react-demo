import React from 'react';
import { connect } from 'react-redux';

// routing
import RouterOutlet from './auth.routing';

// store
import { thunkLogin, thunkRegister } from '../@core/store/auth';

function AuthModule({
    ownProps: { match },
    // ---
    onLogin,
    errorLogin,
    // ---
    onRegister,
    errorRegister,
}) {
    const modulePath = match.path;

    return (
        <RouterOutlet
            modulePath={modulePath}
            // ---
            onLogin={onLogin}
            errorLogin={errorLogin}
            // ---
            onRegister={onRegister}
            errorRegister={errorRegister}
        />
    );
}

// ##################################################

const mapStateToProps = ({ auth: authState }, ownProps) => ({
    ownProps,
    errorLogin: authState.errorLogin,
    errorRegister: authState.errorRegister,
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
