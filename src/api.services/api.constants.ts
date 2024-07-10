import {Endpoint} from "../interfaces/IEndpoint";

const baseURL = "https://jsonplaceholder.typicode.com/";

const endpoints: Endpoint = {
    users: "/users",
    posts: "/posts",
    comments: "/comments",
};

export {baseURL, endpoints}