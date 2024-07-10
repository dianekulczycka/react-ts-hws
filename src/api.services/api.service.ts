const baseURL = "https://jsonplaceholder.typicode.com/";
const endpoints = {
    users: "/users",
    posts: "/posts",
    comments: "/comments",
}

const getUsers = async () => {
    await fetch(baseURL + "/users");
}

const fetchComments = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    return await res.json();
};

const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return await res.json();
};
const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await res.json();
};

export {fetchUsers, fetchPosts, fetchComments}