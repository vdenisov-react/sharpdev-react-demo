import { initialState } from './state';
import * as AUTH from './types';

export function authReducer(state = initialState, action) {
    switch (action.type) {
        // => LOGIN
        case AUTH.LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: true,
                errorLogin: null,
            };

        case AUTH.LOGIN_ERROR:
            return {
                ...state,
                isAuth: false,
                errorLogin: action.payload.errorLogin,
            };
        // <= LOGIN

        // => REGISTER
        case AUTH.REGISTER_SUCCESS:
            return {
                ...state,
                isAuth: true,
                errorRegister: null,
            };

        case AUTH.REGISTER_ERROR:
            return {
                ...state,
                isAuth: false,
                errorRegister: action.payload.errorRegister,
            };
        // <= REGISTER

        // => CURRENT_USER
        case AUTH.GET_CURRENT_USER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload.currentUser,
                errorGetCurrentUser: null,
            };
        case AUTH.GET_CURRENT_USER_ERROR:
            return {
                ...state,
                currentUser: null,
                errorGetCurrentUser: action.payload.errorGetCurrentUser,
            };
        // <= CURRENT_USER

        case AUTH.LOGOUT:
            return {
                ...state,
                isAuth: false,
            };

        default:
            return state;
    }
}
