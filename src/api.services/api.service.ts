import {baseURL, endpoints} from "./api.constants";
import {IPost} from "../interfaces/IPost";
import {IUser} from "../interfaces/IUser";
import {IComment} from "../interfaces/IComment";

type IRes = IPost & IUser & IComment;

const fetchData = async (targetEndpoint: string): Promise<IRes[]> => {
    const data = await fetch(baseURL + endpoints[targetEndpoint]);
    return await data.json();
};

export {fetchData}