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
        </div>
    </app-users>

    // ##################################################
);
