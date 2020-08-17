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

export const actionAuthLogout = () => ({
    type: AUTH.LOGOUT,
});
