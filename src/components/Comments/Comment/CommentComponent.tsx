import React, {FC} from 'react';
import {IComment} from "../../../interfaces/IComment";

const CommentComponent: FC<IComment> = ({name, email, body, id}) =>  {
    return (
        <li>
            {id}. Comment title: {name} <br/>
            Author: {email} <br/>
            {body} <br/>
        </li>
    );
};

export default CommentComponent;