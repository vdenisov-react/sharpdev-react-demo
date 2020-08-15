import React from 'react';
import { connect } from 'react-redux';

// layouts
import { Header } from './@layout';

// routing
import RouterOutlet from './app.routing';
import { history } from './@core/navigation';
import { aAuthLogOut } from './@core/store/auth';

function AppComponent({ isAuth, onLogOut }) {
    return (
        <app-root>
            <Header isAuth={isAuth} onLogOut={onLogOut} />

            <div className="content">
                <RouterOutlet isAuth={isAuth} />
            </div>
        </app-root>
    );
}

// ##################################################

const mapStateToProps = (state, ownProps) => ({
    ownProps,
    isAuth: state.auth.isAuth,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLogOut: () => {
        history.push('/auth');
        return dispatch(aAuthLogOut());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
