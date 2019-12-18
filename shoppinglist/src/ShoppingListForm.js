import React, {Component} from 'react'

class ShoppingListForm extends Component {
    constructor(props) {
        super(props)
        this.state = { name: '', qty: '' }
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
        this.props.addItem(this.state)
        this.setState({name: '', qty: ''})
    }

    render() {
        return (
            <section className='ShoppingListForm'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name </label>
                    <input 
                        name='name'
                        id='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <label htmlFor='qty'>Quantity </label>
                    <input
                        name='qty'
                        id='qty'
                        value={this.state.qty}
                        onChange={this.handleChange}
                    />
                    <button>Add Item</button>
                </form>
            </section>
        )
    }
}

export default ShoppingListForm