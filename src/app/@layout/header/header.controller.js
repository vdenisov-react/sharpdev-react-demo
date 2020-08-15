import React, { useState, useEffect } from 'react';
import HeaderView from './header.view';
import { history } from '../../@core/navigation';

const MENU = [
    // { key: 0, link: '/auth', label: 'Auth' },
    { key: 1, link: '/', label: 'Home' },
    { key: 2, link: '/users', label: 'Users' },
    { key: 3, link: '/deals', label: 'Deals' },
];

export function Header({ isAuth, onLogOut }) {
    const appTitle = 'PW React App';
    const navMenu = isAuth ? MENU : [];
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

    function goToAuthPage() {
        history.push('/auth');
    }

    function isLinkActive(navLink) {
        if (navLink === '/') {
            return currentPath === navLink;
        } else {
            return currentPath.includes(navLink);
        }
    }

    return (
        <HeaderView
            ctrl={{
                isAuth,
                appTitle,
                navMenu,
                basePath,
                // ---
                onLogOut,
                onNavigateTo,
                goToAuthPage,
                isLinkActive,
            }}
        />
    );
}
