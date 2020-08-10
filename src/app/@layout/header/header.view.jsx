import React from 'react';
import './header.styles.scss';

export default ({ ctrl }) => (
    // ##################################################

    <app-header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <span className="navbar-brand" to={ctrl.basePath} onClick={() => ctrl.onNavigateTo(ctrl.basePath)}>
                {ctrl.appTitle}
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
                    {ctrl.navMenu.map(item => (
                        <li key={item.key} className={'nav-item' + (ctrl.isLinkActive(item.link) ? ' active' : '')}>
                            <span className="nav-link" onClick={() => ctrl.onNavigateTo(item.link)}>
                                {item.label}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    </app-header>

    // ##################################################
);
