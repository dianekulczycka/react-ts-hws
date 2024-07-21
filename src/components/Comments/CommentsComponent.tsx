import React, {FC, useEffect, useState} from 'react';
import {IComment} from "../../interfaces/IComment";
import {fetchData} from "../../api.services/api.service";
import CommentComponent from "./Comment/CommentComponent";

const CommentsComponent: FC = () => {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        fetchData("/comments").then((comments: IComment[]) => setComments(comments));
    }, []);

    return (
        <ul>
            {
                comments.map(({id, name, email, body}) =>
                    <CommentComponent key={id} id={id} name={name} email={email} body={body}/>
                )
            }
        </ul>
    );
};

export default CommentsComponent;