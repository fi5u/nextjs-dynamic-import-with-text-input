import React, { Component } from 'react'

class InputElement extends Component {
    render() {
        const { inputType, updateValue, value } = this.props

        return (
            <input
                onChange={event => updateValue(event, inputType)}
                type="text"
                value={value}
            />
        )
    }
}

export default InputElement
