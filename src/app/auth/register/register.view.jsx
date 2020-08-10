import React from 'react';
import './register.styles.scss';

export default ({ ctrl }) => (
    // ##################################################

    <app-register>
        <span className="page-title">{ctrl.pageTitle}</span>

        <button onClick={ctrl.goToLogin}>go to login</button>
    </app-register>

    // ##################################################
);
