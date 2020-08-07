import React from 'react';
import HeaderView from './header.view';

const MENU = [
    { key: 1, link: '/', label: 'Home' },
    { key: 2, link: '/auth', label: 'Auth' },
    { key: 3, link: '/deals', label: 'Deals' },
    { key: 4, link: '/users', label: 'Users' },
];

export function Header() {
    const title = 'PW React App';
    const menu = MENU;

    return <HeaderView ctrl={{ title, menu }} />;
}
