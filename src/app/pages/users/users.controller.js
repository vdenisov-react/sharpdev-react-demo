import React from 'react';
import UsersView from './users.view';

export function Users() {
    const pageTitle = 'Users page';

    return <UsersView ctrl={{ pageTitle }} />;
}
