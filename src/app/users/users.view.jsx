import React from 'react';
import './users.styles.scss';

export default ({ ctrl }) => (
    // ##################################################

    <app-users>
        <div className="users-list mt-3">
            <h4 className="page-title">USERS LIST</h4>

            <form className="search-form" onSubmit={ctrl.submitHandler}>
                <input
                    type="text"
                    placeholder="Enter search query ..."
                    className="search-form__input"
                    value={ctrl.searchQuery}
                    onChange={event => ctrl.setSearchQuery(event.target.value)}
                />

                <button type="submit" className="btn btn-info search-form__button">
                    Search
                </button>
            </form>

            <div className="data-list">
                {/* USERS LIST */}
                {ctrl.usersList.length > 0 && (
                    <ul className="list-group">
                        {ctrl.usersList.map((user, index) => (
                            <li key={user.id} className="list-group-item">
                                {index + 1}. {user.name}
                            </li>
                        ))}
                    </ul>
                )}

                {/* NO DATA */}
                {ctrl.usersList.length === 0 && <p className="no-data-msg">no data (try to change search query)</p>}
            </div>
        </div>
    </app-users>

    // ##################################################
);
