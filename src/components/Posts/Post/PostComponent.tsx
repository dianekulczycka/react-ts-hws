import React, {FC} from 'react';
import {IPost} from "../../../interfaces/IPost";
import ShowCommentsButton from "../../buttons/showCommentsButton";

const PostComponent: FC<IPost> = ({id, title, body}) => {
    return (
        <li>
            Post id: {id}. <br/>
            Title: {title} <br/>
            {body} <br/>
            <ShowCommentsButton key={id} id={id}/>
        </li>
    );
};

export default PostComponent;