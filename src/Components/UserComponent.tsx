import React, {Component} from 'react';
import {IUser} from "../interfaces/IUser";

type MyProps = IUser & { showPostsOfUser: (id: number) => void };

class UserComponent extends Component<MyProps, {}> {
    render() {
        return (
            <>
                <li>
                    <h3> {this.props.name}, {this.props.age} y.o. </h3>
                </li>
                <button onClick={() => {
                    this.props.showPostsOfUser(this.props.id)
                }}> Show Posts of {this.props.name} </button>
            </>
        );
    }
}

export {UserComponent};