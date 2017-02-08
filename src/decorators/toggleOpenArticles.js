import React from 'react'

export default (Component) => class WrappedComponent extends React.Component {
    state = {
        //Не привязывайся к названиям сущностей, вся суть декораторов в универсальности. Сделай openItemId
        openArticleId: null
    }

    toggleOpenArticle = (openArticleId, ev) => {
        ev && ev.preventDefault && ev.preventDefault()
        this.setState({
            openArticleId: this.state.openArticleId == openArticleId ? null : openArticleId
        })

    }

    render() {
        return <Component {...this.props} {...this.state} toggleOpenArticle={this.toggleOpenArticle}/>
    }
}
