import React, {FC, useEffect, useState} from 'react';
import {fetchData} from "../../api.services/api.service";
import {IComment} from "../../interfaces/IComment";
import CommentComponent from "../../components/Comments/Comment/CommentComponent";
import {useParams} from "react-router-dom";

const PostDetailsPage: FC = () => {
    const {postId} = useParams();
    const [commentsOfPost, setCommentsOfPost] = useState<IComment[]>([])
    useEffect(() => {
        fetchData(`/posts/${postId}/comments`).then((commentsOfPost: IComment[]) => setCommentsOfPost(commentsOfPost))
    }, []);

    return (
        <div>
            comments of post {postId}:
            {
                commentsOfPost.map(({id, name, email, body}) => (
                    <CommentComponent key={id} id={id} name={name} email={email} body={body}/>))
            }
        </div>
    );
};

export default PostDetailsPage;