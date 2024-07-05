import React, {Component} from 'react';
import {IPost} from "../interfaces/IPost";

class PostComponent extends Component<IPost, {}> {
    render() {
        return (
            <li key={this.props.id}> {this.props.id}. {this.props.title} </li>
        );
    }
}

export {PostComponent};