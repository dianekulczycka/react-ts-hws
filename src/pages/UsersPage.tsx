import React, {FC, useEffect, useState} from 'react';
import UserComponent from "../components/User/UserComponent";
import {IUser} from "../interfaces/IUser";
import {fetchData} from "../api.services/api.service";

const UsersPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
            fetchData("users").then((users: IUser[]) => setUsers(users));
        }, []
    )

    return (
        <ul>
            {
                users.map(({id, name, username, email}) => (
                    <UserComponent key={id} id={id} name={name} username={username} email={email}/>))
            }
        </ul>
    );
};

export default UsersPage;