import React, {FC, useEffect, useState} from 'react';
import UserComponent from "../components/User/UserComponent";
import {IUser} from "../interfaces/IUser";
import {fetchUsers} from "../api.services/api.service";

const UsersPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect( () => {
        fetchUsers().then(users => setUsers(users));
        }, []
    )

    return (
        <ul>
            {
                users.map(({id, name, username, email}) => (<UserComponent key={id} id={id} name={name} username={username} email={email} />))
            }
        </ul>
    );
};

export default UsersPage;