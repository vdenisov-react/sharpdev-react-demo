import { get } from 'lodash';

// store
import {
    actionAuthLoginSuccess,
    actionAuthLoginError,
    actionAuthRegisterSuccess,
    actionAuthRegisterError,
    actionAuthGetCurrentUserSuccess,
    actionAuthGetCurrentUserError,
} from './actions';

// routing
import { history } from '../../navigation';

// services
import { AuthService, UsersService } from '../../api/services';
import { LocalStorageService } from '../../services';

// ...
import { ERROR_UNEXPECTED } from '../../../@shared/constants';

export const thunkLogin = (email, password) => {
    return dispatch => {
        AuthService.login(email, password)
            .then(res => {
                const token = get(res, 'data.id_token') || null;
                LocalStorageService.set('token', token);
                dispatch(actionAuthLoginSuccess());
                dispatch(thunkGetCurrentUser());
            })
            .catch(err => {
                const errMsg = err.message || ERROR_UNEXPECTED;
                dispatch(actionAuthLoginError(errMsg));
            });
    };
};

export const thunkRegister = (email, username, password) => {
    return dispatch => {
        AuthService.register(email, username, password)
            .then(res => {
                const token = get(res, 'data.id_token') || null;
                LocalStorageService.set('token', token);
                dispatch(actionAuthRegisterSuccess());
                dispatch(thunkGetCurrentUser());
            })
            .catch(err => {
                const errMsg = err.message || ERROR_UNEXPECTED;
                dispatch(actionAuthRegisterError(errMsg));
            });
    };
};

export const thunkGetCurrentUser = () => {
    return dispatch => {
        UsersService.getCurrent()
            .then(res => {
                const currentUser = get(res, 'data.user_info_token') || null;
                dispatch(actionAuthGetCurrentUserSuccess(currentUser));
                history.push('/');
            })
            .catch(err => {
                const errMsg = err.message || ERROR_UNEXPECTED;
                dispatch(actionAuthGetCurrentUserError(errMsg));
            });
    };
};
