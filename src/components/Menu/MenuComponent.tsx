import React from 'react';
import MenuItemComponent from "./MenuItemComponent";
import {menuData} from "./menu.data";

const MenuComponent = () => {
    return (
        <ul>
            {menuData.map((el, index) => <MenuItemComponent key={index} index={index} el={el}/>)}
        </ul>
    );
};

export default MenuComponent;