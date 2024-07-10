import React, {FC} from 'react';
import {IUser} from "../../interfaces/IUser";

const UserComponent: FC<IUser> = ({id, name, username, email}) => {
    return (
        <li key={id}>
            {id}. {name} <br/>
            {username} <br/>
            {email} <br/>
        </li>
    );
};

export default UserComponent;