import React, { Component } from 'react'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.handleRemove = this.handleRemove.bind(this)
    }
    handleRemove() {
        this.props.removeTodo(this.props.id)
    }

    render() {
        return (
            <section className='Todo'>
                <button>Edit</button>
                <button onClick={this.handleRemove}>X</button>
                <li>{this.props.task}</li>
            </section>
        )
    }
}

export default Todo