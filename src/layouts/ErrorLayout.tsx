import React, {FC} from 'react';
import {Link} from "react-router-dom";

const ErrorLayout: FC = () => {
    return (
        <div>
            <h1> Sorry! Not found </h1>
            <Link to={"/users"}> Get back to main page </Link>
        </div>
    );
};

export default ErrorLayout;