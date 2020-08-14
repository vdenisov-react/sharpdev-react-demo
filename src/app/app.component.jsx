import React from 'react';
import { connect } from 'react-redux';

// layouts
import { Header } from './@layout';

// routing
import RouterOutlet from './app.routing';
import { aAuthLogIn, aAuthLogOut } from './@core/store/auth';

function AppComponent({ isAuth, onLogIn, onLogOut }) {
    return (
        <app-root>
            <Header />

            {isAuth ? <p>Authorized</p> : <p>Guest</p>}
            <button onClick={onLogIn}>Log In</button>
            <button onClick={onLogOut}>Log Out</button>

            <div className="content">
                <RouterOutlet />
            </div>
        </app-root>
    );
}

// ##################################################

const mapStateToProps = (state, ownProps) => ({
    isAuth: state.auth.isAuth,
    ownProps,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLogIn: () => dispatch(aAuthLogIn()),
    onLogOut: () => dispatch(aAuthLogOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
