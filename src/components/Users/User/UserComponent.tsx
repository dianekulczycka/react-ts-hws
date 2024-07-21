import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import {IUser} from "../../../interfaces/IUser";

interface IProps {
    user: IUser;
}

const UserComponent: FC<IProps> = ({user}) => {
    return (
        <li>
            <NavLink to={user.id.toString()} state={{user}}> {user.id}. {user.name} </NavLink>
        </li>
    );
};

export default UserComponent;