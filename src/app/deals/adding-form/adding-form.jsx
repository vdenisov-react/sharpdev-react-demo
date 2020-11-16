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

export function AddingForm({ selectedUser, onSearchUsers, onCreateDeal }) {
    const [searchQuery, setSearchQuery] = useState('');

    const {
        register: formControl,
        errors: formErrors,
        // ---
        reset: resetForm,
        handleSubmit,
        setValue,
    } = useForm({
        defaultValues: { user: '', amount: '' },
    });

    const formControls = {
        user: formControl({ ...FORM_VALIDATION.USER }),
        amount: formControl({ ...FORM_VALIDATION.AMOUNT }),
    };

    useEffect(() => {
        onSearchUsers(searchQuery);
    }, [searchQuery]);

    useEffect(() => {
        setValue('user', selectedUser);
    }, [selectedUser]);

    function onProcessAdd(data) {
        resetForm();
        const { user, amount } = data;
        onCreateDeal(user, amount);
    }

    return (
        <app-adding-form>
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
        </app-adding-form>
    );
}
