import React, { Component } from 'react'

class SearchBar extends Component {
    state = { search: '' }

    onInputChange = e => this.setState({ search: e.target.value })

    onFormSubmit = e => {
        e.preventDefault()
        this.props.onSubmit(this.state.search)
        this.setState({ search: '' })
    }

    render() {
        const { search } = this.state
        return (
            <section className='SearchBar ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <section className='field'>
                        <label htmlFor='search'>Image Search</label>
                        <input 
                            className='ui segment' 
                            type='text' 
                            id='search' 
                            onChange={this.onInputChange} 
                            value={search} 
                        />
                    </section> 
                </form>
            </section>
        )
    }
}

export default SearchBar