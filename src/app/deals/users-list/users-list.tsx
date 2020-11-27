import React from 'react';

// styles
import './users-list.scss';

type Props = {
    usersList: any[];
    onSelectUser: (user: string) => void;
};

export const UsersList: React.FC<Props> = ({ usersList, onSelectUser }) => {
    return (
        <section className="app-users-list">
            <div className="users-list mt-3">
                <div className="data-list">
                    {/* USERS LIST */}
                    {usersList.length > 0 && (
                        <ul className="list-group">
                            {usersList.map((user, index) => (
                                <li key={user.id} className="list-group-item" onClick={() => onSelectUser(user.name)}>
                                    {index + 1}. {user.name}
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* NO DATA */}
                    {usersList.length === 0 && <p className="no-data-msg">no matching users found</p>}
                </div>
            </div>
        </section>
    );
};
