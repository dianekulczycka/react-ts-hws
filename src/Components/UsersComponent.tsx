import React, {Component} from 'react';
import {getUsers} from "../services/getUsers";
import {getPostsOfUserById} from "../services/getPostsOfUserById";
import {UserComponent} from "./UserComponent";
import {PostsComponent} from "./PostsComponent";
import {IPost} from "../interfaces/IPost";
import {IUser} from "../interfaces/IUser";

interface MyState {
    users: {
        id: number,
        firstName: string,
        age: number
    }[],
    posts: {
        id: number,
        title: string
    }[]
}

class UsersComponent extends Component<{}, MyState> {

    state: MyState = {
        users: [],
        posts: []
    }

    showPostsOfUser = (id: number) => {
        console.log("showPostsOfUser worked");
        getPostsOfUserById(id)
            .then((posts: IPost[]) => {
                const myPosts = posts.map(({id, title}) => ({id, title}));
                this.setState({posts: [...myPosts]});
            })
    }

    componentDidMount() {
        console.log("component mounted");
        getUsers()
            .then((users: IUser[]) => {
                const myUsers = users.map(({id, firstName, age}) => ({id, firstName, age}));
                this.setState({users: [...myUsers]});
            })
    }

    render() {
        return (
            <>
                <button onClick={() => {
                    console.log(this.state)
                }}> log state to console
                </button>
                <ul>
                    {
                        this.state.users.map((user: any) => (
                            <UserComponent
                                key={user.id}
                                id={user.id}
                                firstName={user.firstName}
                                age={user.age}
                                showPostsOfUser={this.showPostsOfUser}
                            />
                        ))
                    }
                </ul>
                <PostsComponent posts={this.state.posts}/>
            </>
        );
    }
}

export {UsersComponent};