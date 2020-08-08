import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.css';

export default ({ ctrl }) => (
    // ##################################################

    <div className="app-header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="navbar-brand" to={ctrl.basePath} onClick={() => ctrl.setCurrentLink(ctrl.basePath)}>
                {ctrl.appTitle}
            </Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {ctrl.navMenu.map(item => (
                        <li key={item.key} className={'nav-item' + (item.link === ctrl.currentLink ? ' active' : '')}>
                            <Link className="nav-link" to={item.link} onClick={() => ctrl.setCurrentLink(item.link)}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    </div>

    // ##################################################
);
