// home work 1

import React, {Component} from 'react'

export default class Comments extends Component {
    state = {
        isCommentsOpen: false
    }

    comments = this.props.comments;

    render() {
        if (!this.comments) {
            return (
                <section>
                    No comments
                </section>
            )
        }

        return (
            <section>
                {this.getCommentsButton()}
                {this.getComments()}
            </section>
        )
    }

    getCommentsButton () {
        const buttonName = this.state.isCommentsOpen ? 'Hide Comments' : 'Show comments';
        return (
            <button onClick={this.handleButtonClick}>
                {buttonName}
            </button>
        )
    }

    handleButtonClick  = (ev) => {
        this.setState({
            isCommentsOpen: !this.state.isCommentsOpen
        })
    }

    getComments () {
        if (!this.state.isCommentsOpen) return null

        const comments = this.comments.map((comment) => <li key={comment.id}>{comment.text}</li>);
        return (
            <ul>
                {comments}
            </ul>
        )
    }
}
