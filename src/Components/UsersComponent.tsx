import React, {Component} from 'react';
import {getUsers} from "../services/getUsers";
import {getPostsOfUserById} from "../services/getPostsOfUserById";
import {UserComponent} from "./UserComponent";
import {PostsComponent} from "./PostsComponent";

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
        getPostsOfUserById(id).then(res => this.setState(res));
    }

    componentDidMount() {
        console.log("component mounted");
        getUsers().then(res => this.setState(res));
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
                                name={user.firstName}
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