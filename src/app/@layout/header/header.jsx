import React, { useState, useEffect } from 'react';
import { get } from 'lodash';

// navigation
import { history } from '../../@core/navigation';

// styles
import './header.scss';

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

    function isLinkActive(navLink) {
        if (navLink === '/') {
            return currentPath === navLink;
        } else {
            return currentPath.includes(navLink);
        }
    }

    return (
        <app-header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <span className="navbar-brand" to={basePath} onClick={() => onNavigateTo(basePath)}>
                    {appTitle}
                </span>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarColor01"
                    aria-controls="navbarColor01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        {navMenu.map(item => (
                            <li key={item.key} className={'nav-item' + (isLinkActive(item.link) ? ' active' : '')}>
                                <span className="nav-link" onClick={() => onNavigateTo(item.link)}>
                                    {item.label}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <div className="account">
                        <span className="account__user-name">{isAuth ? userIdentity : 'Guest'}</span>

                        {isAuth && (
                            <div className="btn-group account__actions ml-4" role="group">
                                <button type="button" className="btn btn-danger" onClick={onLogout}>
                                    Log Out
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </app-header>
    );
}
