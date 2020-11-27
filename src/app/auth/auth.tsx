import React, { useState } from 'react';
import { connect } from 'react-redux';

// store
import { thunkLogin, thunkRegister } from '../@store/auth';

// pages
import { Login } from './login/login';
import { Register } from './register/register';

const pages = {
    LOGIN: 'login',
    REGISTER: 'register',
};

type Props = {
    onLogin: (email: string, password: string) => void;
    errorLogin: string;
    // ---
    onRegister: (email: string, username: string, password: string) => void;
    errorRegister: string;
};

const Auth: React.FC<Props> = ({
    onLogin,
    errorLogin,
    // ---
    onRegister,
    errorRegister,
}: Props) => {
    const [currentPage, setCurrentPage] = useState(pages.LOGIN);

    function goToRegister() {
        setCurrentPage(pages.REGISTER);
    }

    function goToLogin() {
        setCurrentPage(pages.LOGIN);
    }

    return (
        <section className="app-auth">
            <div>
                {currentPage === pages.LOGIN && (
                    <Login onLogin={onLogin} errorLogin={errorLogin} goToRegister={goToRegister} />
                )}

                {currentPage === pages.REGISTER && (
                    <Register onRegister={onRegister} errorRegister={errorRegister} goToLogin={goToLogin} />
                )}
            </div>
        </section>
    );
};

// ##################################################

const mapStateToProps = ({ auth: authState }: any) => ({
    errorLogin: authState.errorLogin,
    errorRegister: authState.errorRegister,
});

const mapDispatchToProps = (dispatch: any) => ({
    onLogin: (email: string, password: string) => {
        return dispatch(thunkLogin(email, password));
    },
    onRegister: (email: string, username: string, password: string) => {
        return dispatch(thunkRegister(email, username, password));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
