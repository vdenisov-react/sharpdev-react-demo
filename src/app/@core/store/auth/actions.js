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

export const actionAuthLogout = () => ({
    type: AUTH.LOGOUT,
});
