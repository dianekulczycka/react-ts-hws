import {axiosInstance} from "./baseRequest";

const getUsers = async () => {
    return await axiosInstance.get("/users?limit=10").then((res) => res.data.users);
}

export {getUsers};