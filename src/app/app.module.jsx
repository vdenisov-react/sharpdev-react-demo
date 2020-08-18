import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';

// layouts
import { Header } from './@layout';

// routing
import RouterOutlet from './app.routing';
import { history } from './@core/navigation';

// store
import { actionAuthLogout, actionAuthGetCurrentUserSuccess, actionAuthGetCurrentUserError } from './@core/store/auth';

// services
import { LocalStorageService } from './@core/services';
import { AuthService } from './@core/api/services';

// ...
import { ERROR_UNEXPECTED } from './@shared/constants';

function AppModule({ isAuth, currentUser, onGetCurrentUser, onLogout }) {
    useEffect(() => {
        const accessToken = LocalStorageService.get('token');
        !!accessToken ? onGetCurrentUser() : onLogout();
    }, []);

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

const thunkGetCurrentUser = () => {
    return dispatch => {
        AuthService.getCurrentUser()
            .then(res => {
                const currentUser = get(res, 'data.user_info_token');
                dispatch(actionAuthGetCurrentUserSuccess(currentUser));
                history.push('/');
            })
            .catch(err => {
                const errMsg = err.message || ERROR_UNEXPECTED;
                dispatch(actionAuthGetCurrentUserError(errMsg));
            });
    };
};

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
