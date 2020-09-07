import React from 'react';
import cn from 'classnames';

import './deals.styles.scss';

export default ({ ctrl }) => (
    // ##################################################

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
                    {ctrl.dealsList.length > 0 &&
                        ctrl.dealsList.map((deal, index) => (
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
                    {ctrl.dealsList.length === 0 && (
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

    // ##################################################
);
