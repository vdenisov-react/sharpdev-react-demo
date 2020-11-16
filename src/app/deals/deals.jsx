import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// store
import { thunkAddNew, thunkGetList } from '../@core/store/deals';

// styles
import './deals.scss';

// components
import { AddingForm } from './adding-form/adding-form';
import { DealsTable } from './deals-table/deals-table';

function Deals({ dealsList, onAddNew, onGetList }) {
    useEffect(() => {
        onGetList();
    }, [onGetList]);

    function onCreateDeal(user, amount) {
        onAddNew(user, amount);
    }

    return (
        <app-deals>
            <AddingForm onCreateDeal={onCreateDeal} />

            <DealsTable dealsList={dealsList} />
        </app-deals>
    );
}

// ##################################################

const mapStateToProps = ({ deals: dealsState }) => ({
    dealsList: dealsState.dealsList,
    errorAddNew: dealsState.errorAddNew,
});

const mapDispatchToProps = dispatch => ({
    onGetList: () => {
        return dispatch(thunkGetList());
    },
    onAddNew: (user, amount) => {
        return dispatch(thunkAddNew(user, amount));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Deals);
