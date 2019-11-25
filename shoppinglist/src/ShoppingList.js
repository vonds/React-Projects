import React, {Component} from 'react'
import ShoppingListForm from './ShoppingListForm'
import uuid from 'uuid/v4'

class ShoppingList extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            items: [
                {name: 'eggs',  qty: '2 dozen', id: uuid()},
                {name: 'milk',  qty: '2 gallons', id: uuid()}
            ]
        }
        this.addItem = this.addItem.bind(this)
    }

    addItem(item) {
        const newItem = {...item, id: uuid()}
        this.setState(state => ({
            items: [...state.items, newItem]
        }))
    }

    renderItems() {
        return (
            <ul>
                {this.state.items.map(item => (
                    <li key={item.id}>
                        {item.name} : {item.qty}
                    </li>
                ))}
            </ul>
        )
       
    }

    render() {
        return (
            <section className='ShoppingList'>
                <h1>Shopping List</h1>
                {this.renderItems()}
                <ShoppingListForm addItem={this.addItem}/>
            </section>
        )
    }
}

export default ShoppingList