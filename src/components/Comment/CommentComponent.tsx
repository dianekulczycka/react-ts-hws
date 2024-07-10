import React, {FC} from 'react';
import {IComment} from "../../interfaces/IComment";

const CommentComponent: FC<IComment> = ({postId, id, name, email, body}) => {
    return (
        <li key={id}>
            User id: {id} <br/>
            Post id: {postId} <br/>
            Comment title: {name} <br/>
            Author: {email} <br/>
            {body} <br/>
        </li>
    );
};

export default CommentComponent;