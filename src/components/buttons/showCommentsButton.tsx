import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

interface IProps {
    id: number;
}

const ShowCommentsButton: FC<IProps> = ({id}) => {
    const navigate = useNavigate();
    const showCommentsHandler = () => {
        navigate(`/posts/${id}/comments`);
    }
    return (
        <button onClick={showCommentsHandler}> See comments </button>
    );
};

export default ShowCommentsButton;