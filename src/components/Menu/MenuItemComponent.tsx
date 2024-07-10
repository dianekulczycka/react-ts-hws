import React, {FC} from 'react';
import {Link} from "react-router-dom";

interface IProps {
    index: number,
    el: string
}

const MenuItemComponent: FC<IProps> = ({el, index}) => {
    return (
        <li key={index}>
            <Link key={index} to={el.toString()}> {el} </Link>
        </li>
    );
};

export default MenuItemComponent;