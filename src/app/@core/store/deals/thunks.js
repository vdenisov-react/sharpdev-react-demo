import { get } from 'lodash';

// store
import { actionDealsAddNewSuccess, actionDealsAddNewError } from './actions';

// services
import { DealsService } from '../../api/services';

// ...
import { ERROR_UNEXPECTED } from '../../../@shared/constants';

export const thunkAddNew = (user, amount) => {
    return async dispatch => {
        try {
            const res = await DealsService.addNew(user, amount);
            const deal = get(res, 'trans_token') || null;
            dispatch(actionDealsAddNewSuccess(deal));
        } catch (err) {
            const errMsg = parseError(err);
            dispatch(actionDealsAddNewError(errMsg));
        }
    };
};

const parseError = err => {
    return get(err, 'response.data') || get(err, 'message') || ERROR_UNEXPECTED;
};
