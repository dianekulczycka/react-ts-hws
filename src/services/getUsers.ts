import {axiosInstance} from "./baseRequest";

const getUsers = async () => {
    const res = await axiosInstance.get(`users?limit=10`);
    return res.data.users;
};

export {getUsers};