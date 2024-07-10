import React, {FC, useEffect, useState} from 'react';
import PostComponent from "../components/Post/PostComponent";
import {IUser} from "../interfaces/IUser";
import {fetchPosts, fetchUsers} from "../api.services/api.service";
import UserComponent from "../components/User/UserComponent";
import {IPost} from "../interfaces/IPost";

const PostsPage: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect( () => {
            fetchPosts().then(posts => setPosts(posts));
        }, []
    )

    return (
        <ul>
            {
                posts.map(({userId, id, title, body}) => (<PostComponent key={id} id={id} userId={userId} title={title} body={body} />))
            }
        </ul>
    );
};

export default PostsPage;