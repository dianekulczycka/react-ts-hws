import React, {FC} from 'react';
import {IPost} from "../../interfaces/IPost";

const PostComponent: FC<IPost> = ({userId, id, title, body}) => {
    return (
        <li key={id}>
            User id: {userId} <br/>
            Post id: {id}. Title: {title} <br/>
            {body} <br/>
        </li>
    );
};

export default PostComponent;