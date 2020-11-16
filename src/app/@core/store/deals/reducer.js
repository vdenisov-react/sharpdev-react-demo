import { initialState } from './state';
import * as DEALS from './types';

const EMPTY_ERRORS = {
    errorAddNew: null,
    errorGetList: null,
};

export function dealsReducer(state = initialState, action) {
    switch (action.type) {
        // => ADD NEW
        case DEALS.ADD_NEW_SUCCESS:
            return {
                ...state,
                ...EMPTY_ERRORS,
                createdDeal: action.payload,
            };

        case DEALS.ADD_NEW_ERROR:
            return {
                ...state,
                ...EMPTY_ERRORS,
                createdDeal: null,
                errorAddNew: action.payload.errorAddNew,
            };
        // <= ADD NEW

        // => GET LIST
        case DEALS.GET_LIST_SUCCESS:
            return {
                ...state,
                ...EMPTY_ERRORS,
                dealsList: action.payload.dealsList,
            };

        case DEALS.GET_LIST_ERROR:
            return {
                ...state,
                ...EMPTY_ERRORS,
                dealsList: [],
                errorGetList: action.payload.errorGetList,
            };
        // <= GET LIST

        default:
            return state;
    }
}
