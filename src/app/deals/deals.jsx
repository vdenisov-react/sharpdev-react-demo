import React, { useEffect, useState } from 'react';
import { get } from 'lodash';

// services
import { DealsService } from '../@core/api/services';

// styles
import './deals.scss';
import cn from 'classnames';

export function Deals() {
    const [dealsList, setDealsList] = useState([]);

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

    return (
        <app-deals>
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
