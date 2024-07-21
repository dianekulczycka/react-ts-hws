import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

const ErrorLayout: FC = () => {
    return (
        <div>
            <h1> Sorry! Not found </h1>
            <NavLink to={"/"}> Get back to main page </NavLink>
        </div>
    );
};

export default ErrorLayout;