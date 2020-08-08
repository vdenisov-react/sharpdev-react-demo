import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderView from './header.view';

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

    const location = useLocation();
    const [currentLink, setCurrentLink] = useState(location.pathname);

    return <HeaderView ctrl={{ appTitle, navMenu, basePath, currentLink, setCurrentLink }} />;
}
