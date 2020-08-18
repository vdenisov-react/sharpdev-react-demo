// react/redux
import React, { useState, useEffect } from 'react';

// third-party
import { get } from 'lodash';

// navigation
import { history } from '../../@core/navigation';

// template
import HeaderView from './header.view';

const MENU = [
    { key: 1, link: '/', label: 'Home' },
    { key: 2, link: '/users', label: 'Users' },
    { key: 3, link: '/deals', label: 'Deals' },
];

export function Header({ isAuth, currentUser, onLogout }) {
    // app title
    const appTitle = 'PW React App';
    const basePath = '/';

    // header menu
    const navMenu = isAuth ? MENU : [];
    const userIdentity = isAuth ? get(currentUser, 'email') || 'Authorized' : 'Guest';

    // path/location
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
                userIdentity,
                // ---
                onLogout,
                onNavigateTo,
                goToAuthPage,
                isLinkActive,
            }}
        />
    );
}
