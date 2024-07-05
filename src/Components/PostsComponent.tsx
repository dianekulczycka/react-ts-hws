import React, {Component} from 'react';
import {IPost} from "../interfaces/IPost";
import {PostComponent} from "./PostComponent";

interface MyProps {
    posts: IPost[]
}

class PostsComponent extends Component<MyProps, {}> {
    render() {
        return (
            <ul>
                <h1> Posts: </h1>
                {
                    this.props.posts.length === 0 ? <p> No posts! </p> : this.props.posts.map(el => <PostComponent
                        key={el.id}
                        id={el.id}
                        title={el.title}/>)
                }
            </ul>
        );
    }
}

export {PostsComponent};