import axios, {AxiosInstance} from "axios";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: "https://dummyjson.com/"
});

export {axiosInstance};