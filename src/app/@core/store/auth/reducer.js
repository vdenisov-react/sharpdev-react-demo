import { initialState } from './state';
import * as AUTH from './types';

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH.LOG_IN:
            return { ...state, isAuth: true };
        case AUTH.LOG_OUT:
            return { ...state, isAuth: false };
        default:
            return state;
    }
}
