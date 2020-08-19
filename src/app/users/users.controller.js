import React, { useEffect, useState } from 'react';
import { get } from 'lodash';

// template
import UsersView from './users.view';

// services
import { UsersService } from '../@core/api/services/users.service';

// ...
import { EMPTY_LINE_WITH_SINGLE_SPACE } from '../@shared/constants';

export function Users() {
    const pageTitle = 'Users page';

    const [searchQuery, setSearchQuery] = useState('');
    const [filterStr, setFilterStr] = useState('');
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        UsersService.getAll(filterStr || EMPTY_LINE_WITH_SINGLE_SPACE)
            .then(res => {
                const users = get(res, 'data');
                console.log('USERS =>', users);
                setUsersList(users);
            })
            .catch(err => {
                console.log('ERR =>', err);
            });
    }, [filterStr]);

    function submitHandler(event) {
        event.preventDefault();
        console.log('search query =>', searchQuery);
        setFilterStr(searchQuery);
    }

    return (
        <UsersView
            ctrl={{
                pageTitle,
                searchQuery,
                usersList,
                // ---
                submitHandler,
                setSearchQuery,
            }}
        />
    );
}
