import React, {FC} from 'react';
import {IPost} from "../interfaces/IPost";

const PostComponent: FC<IPost> = ({id, title}) => {
    return (
        <>
            <li key={id}> {title} </li>
        </>
    );
};

export {PostComponent};