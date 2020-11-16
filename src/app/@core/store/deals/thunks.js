import { get } from 'lodash';

// store
import {
    actionDealsAddNewSuccess,
    actionDealsAddNewError,
    actionDealsGetListSuccess,
    actionDealsGetListError,
} from './actions';

// services
import { DealsService } from '../../api/services';

// ...
import { ERROR_UNEXPECTED } from '../../../@shared/constants';

export const thunkAddNew = (user, amount) => {
    return async dispatch => {
        try {
            const res = await DealsService.addNew(user, amount);
            const dealObj = get(res, 'data.trans_token') || null;
            dispatch(actionDealsAddNewSuccess(dealObj));
        } catch (err) {
            const errMsg = parseError(err);
            dispatch(actionDealsAddNewError(errMsg));
        }
    };
};

export const thunkGetList = () => {
    return async dispatch => {
        try {
            const res = await DealsService.getAll();
            const dealArr = get(res, 'data.trans_token') || [];
            dispatch(actionDealsGetListSuccess(dealArr));
        } catch (err) {
            const errMsg = parseError(err);
            dispatch(actionDealsGetListError(errMsg));
        }
    };
};

const parseError = err => {
    return get(err, 'response.data') || get(err, 'message') || ERROR_UNEXPECTED;
};
