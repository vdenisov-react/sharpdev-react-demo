import React from 'react';
import { connect } from 'react-redux';

// routing
import RouterOutlet from './auth.routing';
import { history } from '../@core/navigation';
import { aAuthLogIn } from '../@core/store/auth';

function AuthModule({ ownProps: { match }, onLogIn }) {
    const modulePath = match.path;

    return <RouterOutlet modulePath={modulePath} onLogIn={onLogIn} />;
}

// ##################################################

const mapStateToProps = (state, ownProps) => ({
    ownProps,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLogIn: () => {
        history.push('/');
        return dispatch(aAuthLogIn());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthModule);
