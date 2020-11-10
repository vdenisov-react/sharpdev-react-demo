import React, { useEffect, useState } from 'react';
import { get } from 'lodash';

// services
import { UsersService } from '../@core/api/services';

// styles
import './users.scss';

export function Users() {
    const pageTitle = 'Users page';

    const [searchQuery, setSearchQuery] = useState('');
    const [appliedFilter, setAppliedFilter] = useState('');
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        UsersService.getAll(appliedFilter)
            .then(res => {
                const users = get(res, 'data') || [];
                console.log('USERS =>', users);
                setUsersList(users);
            })
            .catch(err => {
                console.log('ERR =>', err);
            });
    }, [appliedFilter]);

    function submitHandler(event) {
        event.preventDefault();
        console.log('search query =>', searchQuery);
        setAppliedFilter(searchQuery);
    }

    return (
        <app-users>
            <div className="users-list mt-3">
                <h4 className="page-title">{pageTitle}</h4>

                <form className="search-form" onSubmit={submitHandler}>
                    <input
                        type="text"
                        placeholder="Enter search query ..."
                        className="search-form__input"
                        value={searchQuery}
                        onChange={event => setSearchQuery(event.target.value)}
                    />

                    <button
                        type="submit"
                        className="btn btn-info search-form__button"
                        disabled={searchQuery === appliedFilter}
                    >
                        Search
                    </button>
                </form>

                <div className="data-list">
                    {appliedFilter.length !== 0 && usersList.length !== 0 && <p>Applied filter: "{appliedFilter}"</p>}

                    {/* USERS LIST */}
                    {usersList.length > 0 && (
                        <ul className="list-group">
                            {usersList.map((user, index) => (
                                <li key={user.id} className="list-group-item">
                                    {index + 1}. {user.name}
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* NO DATA */}
                    {usersList.length === 0 && <p className="no-data-msg">no data (try to change search query)</p>}
                </div>
            </div>
        </app-users>
    );
}
