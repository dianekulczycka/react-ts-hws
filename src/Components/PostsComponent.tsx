import React, {FC} from 'react';
import {IPost} from "../interfaces/IPost";

interface IProps {
    posts: IPost[]
}

const PostsComponent: FC<IProps> = ({posts}) => {
    return (
        <ul>
            <h1> Posts: </h1>
            {
                posts.length === 0 ? <p> No posts! </p> : posts.map(value => <li key={value.id}> {value.title} </li>)
            }
        </ul>
    );
};

export {PostsComponent};