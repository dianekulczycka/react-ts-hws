import React, {FC, useEffect, useState} from 'react';
import PostComponent from "../components/Post/PostComponent";
import {fetchData} from "../api.services/api.service";
import {IPost} from "../interfaces/IPost";

const PostsPage: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
            fetchData("posts").then((posts: IPost[]) => setPosts(posts));
        }, []
    )

    return (
        <ul>
            {
                posts.map(({userId, id, title, body}) => (
                    <PostComponent key={id} id={id} userId={userId} title={title} body={body}/>))
            }
        </ul>
    );
};

export default PostsPage;