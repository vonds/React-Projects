import React, { Component } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            todos: [{ task: 'walk the fish'}, {task: 'Groom chickens'}] 
        }
        this.create = this.create.bind(this)
    }

    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    render() {
        const todos = this.state.todos.map(todo => {
           return  <Todo task={todo.task}/>
        })
        return (
            <section className='TodoList'>
                <h1>Todo List</h1>
                <TodoForm createTodo={this.create}/>
                <ul>{todos}</ul>
            </section>
        )
    }
}

export default TodoList