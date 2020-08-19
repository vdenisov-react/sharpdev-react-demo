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

    useEffect(() => {
        UsersService.getAll(EMPTY_LINE_WITH_SINGLE_SPACE)
            .then(res => {
                console.log('USERS =>', get(res, 'data'));
            })
            .catch(err => {
                console.log('ERR =>', err);
            });
    }, []);

    function submitHandler(event) {
        event.preventDefault();
        console.log('search query =>', searchQuery);
    }

    return <UsersView ctrl={{ pageTitle, searchQuery, submitHandler, setSearchQuery }} />;
}
