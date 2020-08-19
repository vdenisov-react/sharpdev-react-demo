import React, { useEffect } from 'react';
import { get } from 'lodash';

// template
import UsersView from './users.view';

// services
import { UsersService } from '../@core/api/services/users.service';

// ...
import { EMPTY_LINE_WITH_SINGLE_SPACE } from '../@shared/constants';

export function Users() {
    const pageTitle = 'Users page';

    useEffect(() => {
        UsersService.getAll(EMPTY_LINE_WITH_SINGLE_SPACE)
            .then(res => {
                console.log('USERS =>', get(res, 'data'));
            })
            .catch(err => {
                console.log('ERR =>', err);
            });
    }, []);

    return <UsersView ctrl={{ pageTitle }} />;
}
