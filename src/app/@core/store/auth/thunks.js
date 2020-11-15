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
    return async dispatch => {
        try {
            const res = await AuthService.login(email, password);
            const token = get(res, 'data.id_token') || null;
            LocalStorageService.set('token', token);
            dispatch(actionAuthLoginSuccess());
            dispatch(thunkGetCurrentUser());
        } catch (err) {
            const errMsg = parseError(err);
            dispatch(actionAuthLoginError(errMsg));
        }
    };
};

export const thunkRegister = (email, username, password) => {
    return async dispatch => {
        try {
            const res = await AuthService.register(email, username, password);
            const token = get(res, 'data.id_token') || null;
            LocalStorageService.set('token', token);
            dispatch(actionAuthRegisterSuccess());
            dispatch(thunkGetCurrentUser());
        } catch (err) {
            const errMsg = parseError(err);
            dispatch(actionAuthRegisterError(errMsg));
        }
    };
};

export const thunkGetCurrentUser = () => {
    return async dispatch => {
        try {
            const res = await UsersService.getCurrent();
            const currentUser = get(res, 'data.user_info_token') || null;
            dispatch(actionAuthGetCurrentUserSuccess(currentUser));
            history.push('/');
        } catch (err) {
            const errMsg = parseError(err);
            dispatch(actionAuthGetCurrentUserError(errMsg));
        }
    };
};

const parseError = err => {
    return get(err, 'response.data') || get(err, 'message') || ERROR_UNEXPECTED;
};
