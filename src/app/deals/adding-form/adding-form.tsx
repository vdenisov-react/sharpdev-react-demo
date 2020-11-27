import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

// styles
import './adding-form.scss';

const FORM_VALIDATION = {
    USER: {
        required: { value: true, message: 'Email is required!' },
    },
    AMOUNT: {
        required: { value: true, message: 'Password is required!' },
    },
};

type Props = {
    selectedUser: string;
    copiedDeal: any;
    repeatedDeal: any;
    onSearchUsers: (searchQuery: string) => void;
    onCreateDeal: (username: string, amount: number) => void;
};

export const AddingForm: React.FC<Props> = ({
    selectedUser,
    copiedDeal,
    repeatedDeal,
    onSearchUsers,
    onCreateDeal,
}: Props) => {
    const [searchQuery, setSearchQuery] = useState('');

    const {
        register: formControl,
        errors: formErrors,
        // ---
        reset: resetForm,
        setValue: updateForm,
        handleSubmit,
    } = useForm({
        defaultValues: { user: '', amount: '' },
    });

    const formControls = {
        user: formControl({ ...FORM_VALIDATION.USER }),
        amount: formControl({ ...FORM_VALIDATION.AMOUNT }),
    };

    // * search users
    useEffect(() => {
        onSearchUsers(searchQuery);
    }, [searchQuery, onSearchUsers]);

    // * select user
    useEffect(() => {
        if (selectedUser) {
            updateForm('user', selectedUser);
        }
    }, [selectedUser, updateForm]);

    // * handle deal copying
    useEffect(() => {
        if (copiedDeal) {
            updateForm('user', copiedDeal.username);
            updateForm('amount', copiedDeal.amount);
        }
    }, [copiedDeal, updateForm]);

    // * handle deal repeating
    useEffect(() => {
        if (repeatedDeal) {
            resetForm();
            onCreateDeal(repeatedDeal.username, repeatedDeal.amount);
        }
    }, [repeatedDeal, resetForm, onCreateDeal]);

    function onProcessAdd(data: { user: string; amount: number }) {
        resetForm();
        const { user, amount } = data;
        onCreateDeal(user, amount);
    }

    return (
        <section className="app-adding-form">
            <div className="card border-primary adding-card">
                <div className="card-body">
                    <form className="adding-form" onSubmit={handleSubmit(onProcessAdd)}>
                        {/* USER */}
                        <div className="form-group">
                            <label htmlFor="input-user" className="form-control-label font-weight-bold">
                                User
                            </label>

                            <input
                                type="text"
                                name="user"
                                ref={formControls.user}
                                id="input-user"
                                className={'form-control' + (formErrors.user ? ' is-invalid' : '')}
                                placeholder="enter user ..."
                                onChange={event => setSearchQuery(event.target.value)}
                            />

                            {/* errors */}
                            {formErrors.user && <span className="field-error">{formErrors.user.message}</span>}
                        </div>

                        {/* AMOUNT */}
                        <div className="form-group">
                            <label htmlFor="input-amount" className="form-control-label font-weight-bold">
                                Amount
                            </label>

                            <input
                                type="number"
                                name="amount"
                                ref={formControls.amount}
                                id="input-amount"
                                className={'form-control' + (formErrors.amount ? ' is-invalid' : '')}
                                placeholder="enter amount ..."
                            />

                            {/* errors */}
                            {formErrors.amount && <span className="field-error">{formErrors.amount.message}</span>}
                        </div>

                        {/* ADD */}
                        <button type="submit" className="btn btn-success btn-sm adding-button">
                            add
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
