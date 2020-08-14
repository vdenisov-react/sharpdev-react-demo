import { combineReducers } from 'redux';
import { authReducer } from './auth';

export const appReducer = combineReducers({
    auth: authReducer,
});
