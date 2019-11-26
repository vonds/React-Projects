import React, { Component } from 'react'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.state={ task: '' }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({ 
            [e.target.name]: e.target.value 
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.createTodo(this.state)
        this.setState({ task: '' })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='task'>New Task</label>
                <input 
                    type='text'
                    id='task'
                    name='task'
                    placeholder='New Task'
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <button>Add Task</button>
            </form>
        )
    }
}

export default TodoForm