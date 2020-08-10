import React from 'react';
import './login.styles.scss';

export default ({ ctrl }) => (
    // ##################################################

    <app-login>
        <span className="page-title">{ctrl.pageTitle}</span>

        <button onClick={ctrl.goToRegister}>go to register</button>
    </app-login>

    // ##################################################
);
