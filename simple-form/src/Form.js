import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = { username: '' }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({ username: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        alert(`You typed: ${this.state.username}`)
        this.setState({ username: '' })
    }

    render() {
        return (
            <section className="Form">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>User Name</label>
                    <input
                        name='username'
                        id='username'
                        type='text'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
            </section>
        )
    }
}

export default Form