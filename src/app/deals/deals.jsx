import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

// store
import { thunkAddNew, thunkGetList } from '../@core/store/deals';

// styles
import './deals.scss';
import cn from 'classnames';

// components
import { AddingForm } from './adding-form/adding-form';

function Deals({ dealsList, onAddNew, onGetList }) {
    const [isAdding, setAddingFlag] = useState(false);

    useEffect(() => {
        onGetList();
    }, [onGetList]);

    function onOpenForm() {
        setAddingFlag(true);
    }

    function onCancelAdding() {
        setAddingFlag(false);
    }

    function onCreateDeal(user, amount) {
        setAddingFlag(false);
        onAddNew(user, amount);
    }

    return (
        <app-deals>
            {!isAdding && (
                <button type="button" className="btn btn-outline-primary add-button" onClick={onOpenForm}>
                    Add new
                </button>
            )}

            {isAdding && <AddingForm onCancelAdding={onCancelAdding} onCreateDeal={onCreateDeal} />}

            <div className="mt-3 deals-list">
                {/* DEALS LIST */}
                <table className="table">
                    {/* table - header */}
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Username</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Balance</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>

                    {/* table - rows */}
                    <tbody>
                        {/* existing data */}
                        {dealsList.length > 0 &&
                            dealsList.map((deal, index) => (
                                <tr
                                    key={deal.id}
                                    className={cn(
                                        { 'table-success': deal.amount > 0 },
                                        { 'table-danger': deal.amount < 0 },
                                    )}
                                >
                                    <th scope="row">{index + 1}</th>
                                    <td>{deal.username}</td>
                                    <td>{deal.amount}</td>
                                    <td>{deal.balance}</td>
                                    <td>{deal.date}</td>
                                </tr>
                            ))}

                        {/* no data */}
                        {dealsList.length === 0 && (
                            <tr>
                                <td colSpan="100%">
                                    <div className="no-data-msg">no data</div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
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
