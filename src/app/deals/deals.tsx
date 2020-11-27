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

type Props = {
    dealsList: any[];
    onAddNew: (user: string, amount: number) => void;
    onGetList: () => any[];
};

const Deals: React.FC<Props> = ({ dealsList, onAddNew, onGetList }) => {
    const [usersList, setUsersList] = useState<any[]>([]);
    const [isSearching, setSearchingFlag] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<string>('');

    const [copiedDeal, setCopiedDeal] = useState<any>(null);
    const [repeatedDeal, setRepeatedDeal] = useState<any>(null);

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

    function onSelectUser(user: string) {
        setSearchingFlag(false);
        setSelectedUser(user);
    }

    const onCreateDeal = useCallback(
        (user, amount) => {
            onAddNew(user, amount);
        },
        [onAddNew],
    );

    function onCopyDeal(deal: any) {
        setCopiedDeal(deal);
    }

    function onRepeatDeal(deal: any) {
        setRepeatedDeal(deal);
    }

    return (
        <section className="app-deals">
            <AddingForm
                selectedUser={selectedUser}
                copiedDeal={copiedDeal}
                repeatedDeal={repeatedDeal}
                onSearchUsers={onSearchUsers}
                onCreateDeal={onCreateDeal}
            />

            {isSearching && <UsersList usersList={usersList} onSelectUser={onSelectUser} />}

            <DealsTable dealsList={dealsList} onCopyDeal={onCopyDeal} onRepeatDeal={onRepeatDeal} />
        </section>
    );
};

// ##################################################

const mapStateToProps = ({ deals: dealsState }: any) => ({
    dealsList: dealsState.dealsList,
    errorAddNew: dealsState.errorAddNew,
});

const mapDispatchToProps = (dispatch: any) => ({
    onGetList: () => {
        return dispatch(thunkGetList());
    },
    onAddNew: (user: string, amount: number) => {
        return dispatch(thunkAddNew(user, amount));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Deals);
