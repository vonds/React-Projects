import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        alert(
            `You entered: User Name - ${this.state.username} | 
            Email - ${this.state.email} |
            Password - ${this.state.password} `
            )
        this.setState({
            username: '',
            email: '',
            password: ''
        })
    }

    render() {
        return(
            <section className='Form'>
                <h1>Multiple Input Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>User Name</label>
                    <input 
                        type='text'
                        name='username'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <label htmlFor='password'>Password</label>
                    <input
                        type='text'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
            </section>
        )
    }
}

export default Form