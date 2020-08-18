import * as AUTH from './types';

// => LOGIN
export const actionAuthLoginSuccess = () => ({
    type: AUTH.LOGIN_SUCCESS,
    payload: {},
});
export const actionAuthLoginError = errMsg => ({
    type: AUTH.LOGIN_ERROR,
    payload: { loginError: errMsg },
});
// <= LOGIN

// => REGISTER
export const actionAuthRegisterSuccess = () => ({
    type: AUTH.REGISTER_SUCCESS,
    payload: {},
});
export const actionAuthRegisterError = errMsg => ({
    type: AUTH.REGISTER_ERROR,
    payload: { registerError: errMsg },
});
// <= REGISTER

// => CURRENT_USER
export const actionAuthGetCurrentUserSuccess = userObj => ({
    type: AUTH.GET_CURRENT_USER_SUCCESS,
    payload: { currentUser: userObj },
});
export const actionAuthGetCurrentUserError = errMsg => ({
    type: AUTH.GET_CURRENT_USER_ERROR,
    payload: { getCurrentUserError: errMsg },
});
// <= CURRENT_USER

export const actionAuthLogout = () => ({
    type: AUTH.LOGOUT,
});
