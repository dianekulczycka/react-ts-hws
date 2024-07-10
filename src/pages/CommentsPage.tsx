import React, {FC, useEffect, useState} from 'react';
import CommentComponent from "../components/Comment/CommentComponent";
import {IComment} from "../interfaces/IComment";
import {fetchComments} from "../api.services/api.service";

const CommentsPage: FC = () => {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        fetchComments().then(comments => setComments(comments));
    }, []);


    return (
        <ul>
            {
                comments.map(({postId, id, name, email, body}) => (<CommentComponent postId={postId} id={id} name={name} email={email} body={body}/>))
            }
        </ul>
    );
};

export default CommentsPage;