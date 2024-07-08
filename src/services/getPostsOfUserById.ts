import {axiosInstance} from "./baseRequest";

const getPostsOfUserById = async (id: number) => {
    return await axiosInstance.get("/users/" + id + "/posts").then((res) => res.data.posts)
};

export {getPostsOfUserById};


