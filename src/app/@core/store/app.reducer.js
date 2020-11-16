import { combineReducers } from 'redux';

import { authReducer } from './auth';
import { dealsReducer } from './deals';

export const appReducer = combineReducers({
    auth: authReducer,
    deals: dealsReducer,
});
