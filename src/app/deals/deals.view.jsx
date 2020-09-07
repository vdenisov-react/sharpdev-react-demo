import React from 'react';
import cn from 'classnames';

import './deals.styles.scss';

export default ({ ctrl }) => (
    // ##################################################

    <app-deals>
        <div className="mt-3">
            <h4 className="page-title">{ctrl.pageTitle}</h4>

            <div className="data-list">
                {/* DATA TABLE */}
                {ctrl.dealsList.length > 0 && (
                    <table className="table">
                        {/* header */}
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Username</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Balance</th>
                                <th scope="col">Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {ctrl.dealsList.map((deal, index) => (
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
                        </tbody>
                    </table>
                )}

                {/* NO DATA */}
                {ctrl.dealsList.length === 0 && <p className="no-data-msg">no data</p>}
            </div>
        </div>
    </app-deals>

    // ##################################################
);
