import {IPost} from "../interfaces/IPost";
import {IUser} from "../interfaces/IUser";
import {IComment} from "../interfaces/IComment";

const baseURL = "https://jsonplaceholder.typicode.com";

type IRes = IPost & IUser & IComment;

const fetchData = async (targetEndpoint: string): Promise<IRes[]> => {
    const data = await fetch(baseURL + targetEndpoint);
    return await data.json();
};

export {fetchData}