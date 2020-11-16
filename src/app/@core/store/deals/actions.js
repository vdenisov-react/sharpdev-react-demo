import * as DEALS from './types';

// => ADD NEW
export const actionDealsAddNewSuccess = () => ({
    type: DEALS.ADD_NEW_SUCCESS,
    payload: {},
});
export const actionDealsAddNewError = errMsg => ({
    type: DEALS.ADD_NEW_ERROR,
    payload: { errorAddNew: errMsg },
});
// <= ADD NEW
