import React from 'react';
import { connect } from 'react-redux';

// layouts
import { Header } from './@layout';

// routing
import RouterOutlet from './app.routing';
import { history } from './@core/navigation';
import { aAuthLogIn, aAuthLogOut } from './@core/store/auth';

function AppComponent({ isAuth, onLogIn, onLogOut }) {
    return (
        <app-root>
            <Header isAuth={isAuth} onLogOut={onLogOut} />

            <div className="content">
                <RouterOutlet isAuth={isAuth} onLogIn={onLogIn} />
            </div>
        </app-root>
    );
}

// ##################################################

const mapStateToProps = (state, ownProps) => ({
    isAuth: state.auth.isAuth,
    ownProps,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLogIn: () => {
        history.push('/');
        return dispatch(aAuthLogIn());
    },
    onLogOut: () => {
        history.push('/auth');
        return dispatch(aAuthLogOut());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
