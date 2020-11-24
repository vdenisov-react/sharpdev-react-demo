import { initialState } from './state';
import * as AUTH from './types';

const EMPTY_ERRORS = {
    errorLogin: null,
    errorRegister: null,
    errorGetCurrentUser: null,
};

export function authReducer(state = initialState, action) {
    switch (action.type) {
        // => LOGIN
        case AUTH.LOGIN_SUCCESS:
            return {
                ...state,
                ...EMPTY_ERRORS,
                isAuth: true,
            };

        case AUTH.LOGIN_ERROR:
            return {
                ...state,
                ...EMPTY_ERRORS,
                isAuth: false,
                errorLogin: action.payload.errorLogin,
            };
        // <= LOGIN

        // => REGISTER
        case AUTH.REGISTER_SUCCESS:
            return {
                ...state,
                ...EMPTY_ERRORS,
                isAuth: true,
            };

        case AUTH.REGISTER_ERROR:
            return {
                ...state,
                ...EMPTY_ERRORS,
                isAuth: false,
                errorRegister: action.payload.errorRegister,
            };
        // <= REGISTER

        // => CURRENT_USER
        case AUTH.GET_CURRENT_USER_SUCCESS:
            return {
                ...state,
                ...EMPTY_ERRORS,
                isAuth: true,
                currentUser: action.payload.currentUser,
            };

        case AUTH.GET_CURRENT_USER_ERROR:
            return {
                ...state,
                ...EMPTY_ERRORS,
                isAuth: false,
                currentUser: null,
                errorGetCurrentUser: action.payload.errorGetCurrentUser,
            };

        case AUTH.UPDATE_USER_BALANCE:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    balance: action.payload.newBalance,
                },
            };
        // <= CURRENT_USER

        case AUTH.LOGOUT:
            return {
                ...state,
                ...EMPTY_ERRORS,
                isAuth: false,
                currentUser: null,
            };

        default:
            return state;
    }
}
