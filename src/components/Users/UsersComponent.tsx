import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../interfaces/IUser";
import UserComponent from "./User/UserComponent";
import {fetchData} from "../../api.services/api.service";

const UsersComponent: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
            fetchData("/users").then((users: IUser[]) => setUsers(users));
        }, []
    )


    return (
        <ul>
            {
                users.map(user => (
                    <UserComponent user={user} key={user.id}/>))
            }
        </ul>
    );
};

export default UsersComponent;