import React from 'react';

import { INTERNAL_CURRENCY_SYMBOL } from '../../@shared/constants';

// styles
import './deals-table.scss';
import cn from 'classnames';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
    dealsList: any[];
    onCopyDeal: (deal: any) => void;
    onRepeatDeal: (deal: any) => void;
};

export const DealsTable: React.FC<Props> = ({ dealsList, onCopyDeal, onRepeatDeal }) => {
    return (
        <section className="app-deals-table">
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
                            <th scope="col"></th>
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
                                    {/* # */}
                                    <th scope="row">{index + 1}</th>

                                    {/* Username */}
                                    <td>{deal.username}</td>

                                    {/* Amount */}
                                    <td>
                                        {deal.amount}
                                        {INTERNAL_CURRENCY_SYMBOL}
                                    </td>

                                    {/* Balance */}
                                    <td>
                                        {deal.balance}
                                        {INTERNAL_CURRENCY_SYMBOL}
                                    </td>

                                    {/* Date */}
                                    <td>{deal.date}</td>

                                    <td>
                                        <div className="d-flex justify-content-around">
                                            <button
                                                type="button"
                                                className="action-btn"
                                                onClick={() => onCopyDeal(deal)}
                                            >
                                                <FontAwesomeIcon icon={['fas', 'copy']} />
                                                <span className="action-btn__text">COPY</span>
                                            </button>

                                            <button
                                                type="button"
                                                className="action-btn"
                                                onClick={() => onRepeatDeal(deal)}
                                            >
                                                <FontAwesomeIcon icon={['fas', 'redo']} />
                                                <span className="action-btn__text">REPEAT</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                        {/* no data */}
                        {dealsList.length === 0 && (
                            <tr>
                                {/* @ts-expect-error: Type 'string' is not assignable to type 'number | undefined'. */}
                                <td colSpan="100%">
                                    <div className="no-data-msg">no data</div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
};
