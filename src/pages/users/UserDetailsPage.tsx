import React, {FC, useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {fetchData} from "../../api.services/api.service";
import {IPost} from "../../interfaces/IPost";
import PostComponent from "../../components/Posts/Post/PostComponent";

const UserDetailsPage: FC = () => {
    const {id: paramId} = useParams<string>();
    const {state: {user}} = useLocation();

    const [postsOfUser, setPostsOfUser] = useState<IPost[]>([])

    useEffect(() => {
        fetchData(`/users/${paramId}/posts`).then((postsOfUser: IPost[]) => setPostsOfUser(postsOfUser))
    }, []);

    return (
        <>
            <div>
                user details {paramId}: <br/>
                {user.name} <br/>
                "{user.username}" <br/>
                {user.email} <br/>
                {user.phone} <br/>
            </div>
            <div>
                posts of user {paramId}:
                {
                    postsOfUser.map(({id, title, body}) => (
                        <PostComponent key={id} id={id} title={title} body={body}/>))
                }
            </div>
        </>
    );
};

export default UserDetailsPage;