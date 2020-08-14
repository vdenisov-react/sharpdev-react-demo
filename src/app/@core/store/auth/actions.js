import * as AUTH from './types';

export const aAuthLogIn = () => ({
    type: AUTH.LOG_IN,
});

export const aAuthLogOut = () => ({
    type: AUTH.LOG_OUT,
});
