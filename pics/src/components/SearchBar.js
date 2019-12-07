import React, { Component } from 'react'

class SearchBar extends Component {
    state = { search: '' }

    handleChange = (e) => {
        this.setState({ search: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({ search: '' })
    }

    render() {
        const { search } = this.state
        return (
            <section className='SearchBar ui segment'>
                <form className='ui form' onSubmit={this.handleSubmit}>
                    <section className='field'>
                        <label htmlFor='search'>Image Search</label>
                        <input className='ui segment' type='text' id='search' onChange={this.handleChange} value={search} />
                    </section> 
                </form>
            </section>
        )
    }
}

export default SearchBar