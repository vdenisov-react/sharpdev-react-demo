import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// layouts
import { Header } from './@layout';

// routing
import RouterOutlet from './app.routing';
import { history } from './@core/navigation';

// store
import { actionAuthLogout, thunkGetCurrentUser } from './@core/store/auth';

// services
import { LocalStorageService } from './@core/services';

function AppModule({ isAuth, currentUser, onGetCurrentUser, onLogout }) {
    useEffect(() => {
        const accessToken = LocalStorageService.get('token');
        if (accessToken) onGetCurrentUser();
    }, [onGetCurrentUser]);

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
    onGetCurrentUser: () => {
        return dispatch(thunkGetCurrentUser());
    },
    onLogout: () => {
        LocalStorageService.del('token');
        history.push('/auth');
        return dispatch(actionAuthLogout());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppModule);
