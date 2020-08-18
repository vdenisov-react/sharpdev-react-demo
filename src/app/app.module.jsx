import React from 'react';
import { connect } from 'react-redux';

// layouts
import { Header } from './@layout';

// routing
import RouterOutlet from './app.routing';
import { history } from './@core/navigation';
import { actionAuthLogout } from './@core/store/auth';

function AppModule({ isAuth, currentUser, onLogout }) {
    return (
        <app-root>
            <Header isAuth={isAuth} currentUser={currentUser} onLogout={onLogout} />

            <div className="content">
                <RouterOutlet isAuth={isAuth} />
            </div>
        </app-root>
    );
}

// ##################################################

const mapStateToProps = (state, ownProps) => ({
    ownProps,
    isAuth: state.auth.isAuth,
    currentUser: state.auth.currentUser,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLogout: () => {
        history.push('/auth');
        return dispatch(actionAuthLogout());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppModule);
