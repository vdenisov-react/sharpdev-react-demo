import React from 'react';
import './header.styles.scss';

export default ({ ctrl }) => (
    // ##################################################

    <app-header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <span className="navbar-brand" to={ctrl.basePath} onClick={() => ctrl.onNavigateTo(ctrl.basePath)}>
                {ctrl.appTitle}
            </span>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {ctrl.navMenu.map(item => (
                        <li key={item.key} className={'nav-item' + (item.link === ctrl.currentLink ? ' active' : '')}>
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
