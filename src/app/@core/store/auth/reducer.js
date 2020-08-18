import { initialState } from './state';
import * as AUTH from './types';

export function authReducer(state = initialState, action) {
    switch (action.type) {
        // => LOGIN
        case AUTH.LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: true,
                loginError: null,
            };

        case AUTH.LOGIN_ERROR:
            return {
                ...state,
                isAuth: false,
                loginError: action.payload.loginError,
            };
        // <= LOGIN

        // => REGISTER
        case AUTH.REGISTER_SUCCESS:
            return {
                ...state,
                isAuth: true,
                registerError: null,
            };

        case AUTH.REGISTER_ERROR:
            return {
                ...state,
                isAuth: false,
                registerError: action.payload.registerError,
            };
        // <= REGISTER

        // => CURRENT_USER
        case AUTH.GET_CURRENT_USER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload.currentUser,
                getCurrentUserError: null,
            };
        case AUTH.GET_CURRENT_USER_ERROR:
            return {
                ...state,
                currentUser: null,
                getCurrentUserError: action.payload.getCurrentUserError,
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
