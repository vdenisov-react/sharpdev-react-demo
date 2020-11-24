import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';

// store
import { thunkAddNew, thunkGetList } from '../@store/deals';

// styles
import './deals.scss';

// services
import { UsersService } from '../@core/api/services';

// components
import { AddingForm } from './adding-form/adding-form';
import { DealsTable } from './deals-table/deals-table';
import { UsersList } from './users-list/users-list';

function Deals({ dealsList, onAddNew, onGetList }) {
    const [usersList, setUsersList] = useState([]);
    const [isSearching, setSearchingFlag] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const [copiedDeal, setCopiedDeal] = useState(null);
    const [repeatedDeal, setRepeatedDeal] = useState(null);

    useEffect(() => {
        onGetList();
    }, [onGetList]);

    const onSearchUsers = useCallback(query => {
        if (!query) return;
        setSearchingFlag(true);

        UsersService.getAll(query)
            .then(res => {
                setUsersList(res.data);
            })
            .catch(err => {
                console.log('ERR =>', err);
            });
    }, []);

    function onSelectUser(user) {
        setSearchingFlag(false);
        setSelectedUser(user);
    }

    const onCreateDeal = useCallback(
        (user, amount) => {
            onAddNew(user, amount);
        },
        [onAddNew],
    );

    function onCopyDeal(deal) {
        setCopiedDeal(deal);
    }

    function onRepeatDeal(deal) {
        setRepeatedDeal(deal);
    }

    return (
        <app-deals>
            <AddingForm
                selectedUser={selectedUser}
                copiedDeal={copiedDeal}
                repeatedDeal={repeatedDeal}
                onSearchUsers={onSearchUsers}
                onCreateDeal={onCreateDeal}
            />

            {isSearching && <UsersList usersList={usersList} onSelectUser={onSelectUser} />}

            <DealsTable dealsList={dealsList} onCopyDeal={onCopyDeal} onRepeatDeal={onRepeatDeal} />
        </app-deals>
    );
}

// ##################################################

const mapStateToProps = ({ deals: dealsState }) => ({
    dealsList: dealsState.dealsList,
    errorAddNew: dealsState.errorAddNew,
});

const mapDispatchToProps = dispatch => ({
    onGetList: () => {
        return dispatch(thunkGetList());
    },
    onAddNew: (user, amount) => {
        return dispatch(thunkAddNew(user, amount));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Deals);
