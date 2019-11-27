import React, { Component } from 'react'

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

    render() {
        let result
        if (this.state.isEditing){
            result = (
                <section>
                    <form onSubmit={this.handleUpdate}>
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
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={this.handleRemove}>X</button>
                    <li>{this.props.task}</li>
                </section>
            )
        }
        return result
    }
}

export default Todo