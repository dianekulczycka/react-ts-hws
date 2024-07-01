import React, {FC} from 'react';

interface IProps {
    id: number,
    name: string,
    age: number,
    birthDate: string,

    showPostsOfUser: (id: number) => void
}

const UserComponent: FC<IProps> = ({id, name, age, birthDate, showPostsOfUser}) => {
        return (
            <li>
                <h3 className={id.toString()}> {name}, {age} y.o. </h3>
                <p className={id.toString()}> Birthday: {birthDate} </p>
                <button onClick={() => {
                    showPostsOfUser(id)
                }}> Show Posts of {name} </button>
            </li>
        );
    }
;


export {UserComponent};