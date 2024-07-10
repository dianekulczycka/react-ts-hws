import React, {FC} from 'react';
import MenuComponent from "../components/Menu/MenuComponent";
import {Outlet} from "react-router-dom";

const MainLayout: FC = () => {
    return (
        <>
            <MenuComponent/>
            <Outlet/>
        </>
    );
};

export default MainLayout;