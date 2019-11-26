import React, { Component } from 'react'

class Todo extends Component {
    render() {
        return (
            <section className='Todo'>
                <button>Edit</button>
                <button>X</button>
                <li>{this.props.task}</li>
            </section>
        )
    }
}

export default Todo