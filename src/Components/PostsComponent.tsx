import React, {FC} from 'react';
import {IPost} from "../interfaces/IPost";
import {PostComponent} from "./PostComponent";

interface IProps {
    posts: IPost[]
}

const PostsComponent: FC<IProps> = ({posts}) => {
    return (
        <ul>
            <h1> Posts: </h1>
            {
                posts.length === 0 ? <p> No posts! </p> : posts.map(value => <PostComponent key={value.id} id={value.id}
                                                                                            title={value.title}/>)
            }
        </ul>
    );
};

export {PostsComponent};