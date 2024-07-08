import {axiosInstance} from "./baseRequest";

const getPostsOfUserById = async (id: number) => {
    const res = await axiosInstance.get(`users/${id}/posts`);
    return res.data.posts;
};

export {getPostsOfUserById};