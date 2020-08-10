import React, { useState, useEffect } from 'react';
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

    const initLocation = history.location;
    const [currentPath, setCurrentPath] = useState(initLocation.pathname);

    useEffect(() => {
        history.listen(newLocation => {
            setCurrentPath(newLocation.pathname);
        });
    }, []);

    function onNavigateTo(navLink) {
        history.push(navLink);
    }

    function isLinkActive(navLink) {
        if (navLink === '/') {
            return currentPath === navLink;
        } else {
            return currentPath.includes(navLink);
        }
    }

    return <HeaderView ctrl={{ appTitle, navMenu, basePath, onNavigateTo, isLinkActive }} />;
}
