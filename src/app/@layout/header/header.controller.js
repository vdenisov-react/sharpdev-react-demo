import React from 'react';
import HeaderView from './header.view';
import { history } from '../../@core';

const MENU = [
    { key: 1, link: '/', label: 'Home' },
    { key: 2, link: '/auth', label: 'Auth' },
    { key: 3, link: '/deals', label: 'Deals' },
    { key: 4, link: '/users', label: 'Users' },
];

export function Header() {
    const appTitle = 'PW React App';
    const navMenu = MENU;
    const basePath = '/';

    console.log('header init !!!');

    function onNavigateTo(link) {
        console.log(`navigate to => "${link}"`);
        history.push(link);
    }

    return <HeaderView ctrl={{ appTitle, navMenu, basePath, onNavigateTo }} />;
}
