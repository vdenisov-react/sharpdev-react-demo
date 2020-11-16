import React from 'react';
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

export function AddingForm({ onCancelAdding, onCreateDeal }) {
    const { register: formControl, handleSubmit, errors: formErrors } = useForm({
        defaultValues: { user: '', amount: '' },
    });

    const formControls = {
        user: formControl({ ...FORM_VALIDATION.USER }),
        amount: formControl({ ...FORM_VALIDATION.AMOUNT }),
    };

    function onProcessAdd(data) {
        const { user, amount } = data;
        onCreateDeal(user, amount);
    }

    return (
        <app-adding-form>
            <div className="card border-primary adding-form">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onProcessAdd)}>
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
                        <div className="mt-3 d-flex justify-content-around">
                            <button type="submit" className="btn btn-success btn-sm action-button">
                                add
                            </button>

                            <button
                                type="button"
                                className="btn btn-danger btn-sm action-button"
                                onClick={onCancelAdding}
                            >
                                cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </app-adding-form>
    );
}
