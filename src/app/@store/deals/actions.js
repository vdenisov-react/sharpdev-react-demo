import * as DEALS from './types';

// => ADD NEW
export const actionDealsAddNewSuccess = dealObj => ({
    type: DEALS.ADD_NEW_SUCCESS,
    payload: { createdDeal: dealObj },
});
export const actionDealsAddNewError = errMsg => ({
    type: DEALS.ADD_NEW_ERROR,
    payload: { errorAddNew: errMsg },
});
// <= ADD NEW

// => GET LIST
export const actionDealsGetListSuccess = dealArr => ({
    type: DEALS.GET_LIST_SUCCESS,
    payload: { dealsList: dealArr },
});
export const actionDealsGetListError = errMsg => ({
    type: DEALS.ADD_NEW_ERROR,
    payload: { errorGetList: errMsg },
});
// <= GET LIST
