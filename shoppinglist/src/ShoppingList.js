import React, {Component} from 'react'
import ShoppingListForm from './ShoppingListForm'

class ShoppingList extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            items: [
                {name: 'eggs',  qty: '2 dozen'},
                {name: 'milk',  qty: '2 gallons'}
            ]
        }
        this.addItem = this.addItem.bind(this)
    }

    addItem(item) {
        this.setState(state => ({
            items: [...state.items, item]
        }))
    }

    renderItems() {
        return (
            <ul>
                {this.state.items.map(item => (
                    <li>
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