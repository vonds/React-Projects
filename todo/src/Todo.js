import React, { Component } from 'react'
import "./Todo.css"

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this)
        this.toggleForm = this.toggleForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
    }
    handleRemove() {
        this.props.removeTodo(this.props.id)
    }

    toggleForm() {
        this.setState({ isEditing: !this.state.isEditing })
    }

    handleUpdate(e) {
        e.preventDefault()
        this.props.updateTodo(this.props.id, this.state.task)
        this.setState({ isEditing: false })
    }

    handleChange(e) {
        this.setState({
            task: [e.target.value]
        })
    }

    handleToggle(e) {
        this.props.toggleTodo(this.props.id)
    }

    render() {
        let result
        if (this.state.isEditing){
            result = (
                <section className='Todo'>
                    <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
                        <input 
                            type="text" 
                            value={this.state.task} 
                            name="task" 
                            onChange={this.handleChange}
                        / >
                        <button>Save</button>
                    </form>
                </section>
            )
        } else {
            result = (
                <section className='Todo'>
                    <li 
                    className={this.props.completed ? 'Todo-task completed': 'Todo-task'}
                    onClick={this.handleToggle}
                    >{this.props.task}</li>
                    <div className="Todo-buttons">
                        <button onClick={this.toggleForm}>
                            <i className='fas fa-pen' />
                        </button>
                        <button onClick={this.handleRemove}>
                            <i className='fas fa-trash' />
                        </button>
                    </div>
                </section>
            )
        }
        return result
    }
}

export default Todo