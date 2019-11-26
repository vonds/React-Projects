import React, { Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            todos: [{ task: 'walk the fish'}, {task: 'Groom chickens'}] 
        }
    }

    render() {
        const todos = this.state.todos.map(todo => {
           return  <Todo task={todo.task}/>
        })
        return (
            <section className='TodoList'>
                <h1>Todo List</h1>
                <ul>{todos}</ul>
            </section>
        )
    }
}

export default TodoList