import React from 'react';
import './deals.styles.scss';

export default ({ ctrl }) => (
    // ##################################################

    <app-deals>
        <div className="deals-list mt-3">
            <h4 className="page-title">{ctrl.pageTitle}</h4>

            <div className="data-list">
                {/* DEALS LIST */}
                {ctrl.dealsList.length > 0 && (
                    <ul className="list-group">
                        {ctrl.dealsList.map((user, index) => (
                            <li key={user.id} className="list-group-item">
                                {index + 1}. {user.name}
                            </li>
                        ))}
                    </ul>
                )}

                {/* NO DATA */}
                {ctrl.dealsList.length === 0 && <p className="no-data-msg">no data</p>}
            </div>
        </div>
    </app-deals>

    // ##################################################
);
