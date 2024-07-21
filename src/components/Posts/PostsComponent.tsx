import React, {FC, useEffect, useState} from 'react';
import {IPost} from "../../interfaces/IPost";
import {fetchData} from "../../api.services/api.service";
import PostComponent from "./Post/PostComponent";

const PostsComponent: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
            fetchData("/posts").then((posts: IPost[]) => setPosts(posts));
        }, []
    )

    return (
        <ul>
            {
                posts.map(({id, title, body}) => (
                    <PostComponent key={id} id={id} title={title} body={body}/>))
            }
        </ul>
    );
};

export default PostsComponent;