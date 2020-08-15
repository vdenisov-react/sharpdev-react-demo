import React from 'react';
import HomeView from './home.view';
import { UsersService } from '../../@core/api/services';

export function Home() {
    const pageTitle = 'Hello, friend!';

    UsersService.current()
        .then(res => console.log('RES =>', res))
        .catch(err => console.log('ERR =>', err));

    return <HomeView ctrl={{ pageTitle }} />;
}
