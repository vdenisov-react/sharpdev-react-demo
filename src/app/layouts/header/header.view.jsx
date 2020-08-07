import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.css';

export default ({ ctrl }) => (
    <div className="app-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                {ctrl.title}
            </a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {/* <li className="nav-item active"> */}
                    {ctrl.menu.map(item => (
                        <li className="nav-item" key={item.key}>
                            <Link className="nav-link" to={item.link}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    </div>
);
