import React, { Component, PropTypes } from 'react'
import './style.css'

class NewCommentForm extends Component {
    static propTypes = {
        comment: PropTypes.shape({
            key: PropTypes.number.isRequired,
            placeholderName: PropTypes.string.isRequired,
            placeholderText: PropTypes.string.isRequired
        })
    }

    getInitialState() {
        return {
            user: '',
            comment: '',
            isDisabledSubmit: true
        }
    }

    state = this.getInitialState();

    render () {
        const {placeholderName, placeholderText} = this.props
        return (
            <form onSubmit={this.saveData}>
                <span>User:</span><input type="text" name="user" value={this.state.user} onChange={this.handleUserChange} placeholder={placeholderName}></input>
                <span>Comment:</span><textarea name="comment" value={this.state.comment} onChange={this.handleUserChange} placeholder={placeholderText}></textarea>
                <button disabled={this.state.isDisabledSubmit}>Add comment</button>
            </form>
        )
    }

    handleUserChange = (ev) => {
        const stateLoc = {}
        stateLoc[ev.target.name] = ev.target.value
        stateLoc.isDisabledSubmit = !(this.state.user && this.state.comment)
        this.setState(stateLoc)
    }

    saveData = (ev, data) => {
        ev.preventDefault();

        console.log('article_id: ', this.props.article_id);
        console.log('user: ', this.state.user);
        console.log('comment: ', this.state.comment);

        this.setState(this.getInitialState())
    }
}

NewCommentForm.defaultProps = {
    placeholderName: '',
    placeholderText: ''
}

export default NewCommentForm