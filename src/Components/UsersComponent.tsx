import React, {FC, useEffect, useState} from 'react';
import {UserComponent} from "./UserComponent";
import {PostsComponent} from "./PostsComponent";
import {getUsers} from "../services/getUsers";
import {IUser} from "../interfaces/IUser";
import {IPost} from "../interfaces/IPost";
import {getPostsOfUserById} from "../services/getPostsOfUserById";

const UsersComponent: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getUsers().then((users: IUser[]) => {
            console.log(users)
            setUsers([...users]);
        });
    }, []);

    const showPostsOfUser = (id: number) => {
        getPostsOfUserById(id).then((posts: IPost[]) => setPosts([...posts]));
        console.log(id);
    }
    console.log(posts);

    return (
        <>
            <ul>
                {
                    users.map(({id, age, firstName, birthDate}) => (
                        <UserComponent
                            key={id}
                            id={id}
                            name={firstName}
                            age={age}
                            birthDate={birthDate}
                            showPostsOfUser={showPostsOfUser}
                        />
                    ))
                }
            </ul>
            <PostsComponent posts={posts}/>
        </>
    );
};

export {UsersComponent};