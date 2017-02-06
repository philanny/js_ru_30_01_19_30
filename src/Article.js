import React, {Component} from 'react'
import Comments from './Comments'

export default class Article extends Component {
    state = {
        isOpen: false
    }

    render() {
        const {article} = this.props
        return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {this.getBody()}
                {/*Следовало внести в getBody*/}
                <Comments comments={article.comments} />
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null

        return (
            <section>
                {this.props.article.text}
            </section>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
