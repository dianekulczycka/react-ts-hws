import {axiosInstance} from "./baseRequest";

const getUsers = async () => {
    return await axiosInstance.get("/users?limit=7").then((res) => res.data);
}

export {getUsers};