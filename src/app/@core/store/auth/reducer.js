import { initialState } from './state';
import { AUTH_LOG_IN, AUTH_LOG_OUT } from './actions';

export function authReducer(state = initialState, action) {
    switch (action) {
        case AUTH_LOG_IN:
            return { ...state, isAuth: true };
        case AUTH_LOG_OUT:
            return { ...state, isAuth: false };
        default:
            return state;
    }
}
