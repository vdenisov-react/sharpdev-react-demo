import React, { useEffect, useState } from 'react';
import { get } from 'lodash';

// template
import UsersView from './users.view';

// services
import { UsersService } from '../@core/api/services';

export function Users() {
    const pageTitle = 'Users page';

    const [searchQuery, setSearchQuery] = useState('');
    const [appliedFilter, setAppliedFilter] = useState('');
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        UsersService.getAll(appliedFilter)
            .then(res => {
                const users = get(res, 'data');
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
        <UsersView
            ctrl={{
                pageTitle,
                searchQuery,
                appliedFilter,
                usersList,
                // ---
                submitHandler,
                setSearchQuery,
            }}
        />
    );
}
