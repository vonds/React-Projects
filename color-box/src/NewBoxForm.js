import React, { Component } from 'react'
import uuid from 'uuid/v4'

class NewBoxForm extends Component {
    constructor(props) {
        super(props)
        this.state = { width: '', height: '', color: '' }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const newBox = {...this.state, id: uuid()}
        this.props.createBox(newBox)
        this.setState({ 
            width: '', 
            height: '', 
            color: '' 
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <section>
                    <label htmlFor='height'>Height</label>
                    <input
                        type='text'
                        name='height'
                        id='height'
                        value={this.state.height}
                        onChange={this.handleChange}
                    />
                </section>
                <section>
                    <label htmlFor='width'>Width</label>
                    <input
                        type='text'
                        name='width'
                        id='width'
                        value={this.state.width}
                        onChange={this.handleChange}
                    />
                </section>
                <section>
                    <label htmlFor='color'>Color</label>
                    <input
                        type='text'
                        name='color'
                        id='color'
                        value={this.state.color}
                        onChange={this.handleChange}
                    />
                </section>
                <button>Add New Box</button>
            </form>
        )
    }
}

export default NewBoxForm