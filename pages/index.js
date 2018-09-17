import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import InputElement from '../components/input-elements'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value1: '',
            value2: '',
        }
    }

    updateValue = (event, inputType) => {
        this.setState({
            [`value${inputType}`]: event.target.value,
        })
    }

    render() {
        const { value } = this.state

        const DynamicInputElement = dynamic(
            import('../components/input-elements')
        )

        return (
            <div>
                <p>Dynamic component – focus lost after every key press</p>
                <DynamicInputElement
                    inputType="1"
                    updateValue={this.updateValue}
                    value={this.state.value1}
                />

                <p>Regular component</p>
                <InputElement
                    inputType="2"
                    updateValue={this.updateValue}
                    value={this.state.value2}
                />
            </div>
        )
    }
}

Home.propTypes = {}

export default Home
