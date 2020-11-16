import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { get } from 'lodash';

// store
import { thunkAddNew } from '../@core/store/deals';

// services
import { DealsService } from '../@core/api/services';

// styles
import './deals.scss';
import cn from 'classnames';

// components
import { AddingForm } from './adding-form/adding-form';

function Deals({ onAddNew }) {
    const [dealsList, setDealsList] = useState([]);
    const [isAdding, setAddingFlag] = useState(false);

    useEffect(() => {
        let mounted = true;

        DealsService.getAll()
            .then(res => {
                if (mounted) {
                    const deals = get(res, 'data.trans_token') || [];
                    console.log('DEALS =>', deals);
                    setDealsList(deals);
                }
            })
            .catch(err => {
                console.log('ERR =>', err);
            });

        return function cleanup() {
            mounted = false;
        };
    }, []);

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
    errorAddNew: dealsState.errorAddNew,
});

const mapDispatchToProps = dispatch => ({
    onAddNew: (user, amount) => {
        return dispatch(thunkAddNew(user, amount));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Deals);
