import React, { useState } from 'react';
import { connect } from 'react-redux';

// store
import { thunkLogin, thunkRegister } from '../@core/store/auth';

// pages
import { Login } from './login/login';
import { Register } from './register/register';

const pages = {
    LOGIN: 'login',
    REGISTER: 'register',
};

function Auth({
    onLogin,
    errorLogin,
    // ---
    onRegister,
    errorRegister,
}) {
    const [currentPage, setCurrentPage] = useState(pages.LOGIN);

    function goToRegister() {
        setCurrentPage(pages.REGISTER);
    }

    function goToLogin() {
        setCurrentPage(pages.LOGIN);
    }

    return (
        <div>
            {currentPage === pages.LOGIN && (
                <Login onLogin={onLogin} errorLogin={errorLogin} goToRegister={goToRegister} />
            )}

            {currentPage === pages.REGISTER && (
                <Register onRegister={onRegister} errorRegister={errorRegister} goToLogin={goToLogin} />
            )}
        </div>
    );
}

// ##################################################

const mapStateToProps = ({ auth: authState }) => ({
    errorLogin: authState.errorLogin,
    errorRegister: authState.errorRegister,
});

const mapDispatchToProps = dispatch => ({
    onLogin: (email, password) => {
        return dispatch(thunkLogin(email, password));
    },
    onRegister: (email, username, password) => {
        return dispatch(thunkRegister(email, username, password));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
