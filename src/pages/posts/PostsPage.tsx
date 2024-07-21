import React, {FC} from 'react';
import PostsComponent from "../../components/Posts/PostsComponent";

const PostsPage: FC = () => {
    return (
        <ul>
            <PostsComponent/>
        </ul>
    );
};

export default PostsPage;