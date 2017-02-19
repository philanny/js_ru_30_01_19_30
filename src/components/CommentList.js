import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import NewCommentForm from './NewCommentForm'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array
    }
    static defaultProps = {
        comments: []
    }
    componentDidMount() {
        console.log('---', 'mounted')
    }

    componentWillReceiveProps(nextProps) {
       // console.log('---', this.props, nextProps)
    }


    componentWillUnmount() {
        //console.log('---', 'unmounting')
    }

    state = {
        isOpen: false
    }

    render() {
        const actionText = this.state.isOpen ? 'hide' : 'show'
        return (
            <div>
                <a href="#" onClick={this.toggleOpen}>{actionText} comments</a>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null

        const {comments} = this.props
        if (!comments.length) return (<div>
            <h3>No comments yet</h3>
            {this.getNewCommentForm()}
        </div>)

        const commentItems = comments.map(id => <li key={id}><Comment id={id} /></li>)
        const commentIds = comments.map(id => id)
        return <div>
            <ul>{commentItems}</ul>
            {this.getNewCommentForm(commentIds)}
        </div>
    }

    getNewCommentForm = commentIds => {
        return (
            <NewCommentForm articleId = {this.props.articleId} addComment={this.props.addComment} commentIds={commentIds} />
        )
    }

    toggleOpen = ev => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentList