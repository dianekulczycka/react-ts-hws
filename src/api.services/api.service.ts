import {baseURL, endpoints} from "./api.constants";

const fetchData = async (targetEndpoint: string) => {
    const data = await fetch(baseURL + endpoints[targetEndpoint]);
    return await data.json();
};

export {fetchData}