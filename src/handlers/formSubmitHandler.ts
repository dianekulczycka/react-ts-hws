import {IFormInfo} from "../interfaces/IFormInfo";

let formSubmitHandler = async (data: IFormInfo) => {
    console.log("Starting to send your post to JSONPlaceHolder...");

    // https://jsonplaceholder.typicode.com/guide/
    // "Updating a resource"

    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: data.title,
            body: data.body,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    console.log(await res.json());
};

export {formSubmitHandler}