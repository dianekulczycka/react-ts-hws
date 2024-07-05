import {axiosInstance} from "./baseRequest";

const getUsers = async () => {
    const res = await axiosInstance.get(`users?limit=5`);
    return res.data;
};

export {getUsers};