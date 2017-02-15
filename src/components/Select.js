import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import ReactSelect from 'react-select'
import {doSelect} from '../AC'

class Select extends Component {
    static propTypes = {

    };

    state = {
        selection: null
    }

    render() {
        const options = this.props.options.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <ReactSelect options = {options} onChange={this.handleSelectChange} value={this.state.selection} multi />
        )
    }

    handleSelectChange = selection => {
        this.setState({ selection })
        this.props.doSelect(selection)
    }

}

export default connect(null, { doSelect })(Select)