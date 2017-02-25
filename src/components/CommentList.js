import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import NewCommentForm from './NewCommentForm'
import {connect} from 'react-redux'
import { loadComments } from '../AC'
import { mapToArr } from '../utils'
import toggleOpen from '../decorators/toggleOpen'
import Loader from './Loader'
import { commentsSelector } from '../selectors'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired
    }

    componentWillReceiveProps ({ isOpen }) {
        if (!this.props.isOpen && isOpen){
            this.props.loadComments(this.props.article.id)
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isLoading !== this.props.isLoading
    }


    render() {
        const actionText = this.props.isOpen ? 'hide' : 'show'
        return (
            <div>
                <a href="#" onClick={this.props.toggleOpen}>{actionText} comments</a>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { comments, isLoading, isOpen } = this.props

        if (!isOpen) return null
        if (isLoading) return <Loader />

        const {id} = this.props.article
        if (!comments.size) return (<div>
            <h3>No comments yet</h3>
            <NewCommentForm articleId={id}/>
        </div>)

        const commentItems = mapToArr(comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>))
        return <div>
            <ul>{commentItems}</ul>
            <NewCommentForm articleId={id} />
        </div>
    }
}

export default connect((state, props) => {
    return {
        comments: commentsSelector(state, props),
        isLoading: state.comments.isLoading
    }
}, { loadComments })(toggleOpen(CommentList));
