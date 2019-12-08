import React, { Component } from 'react'

class SearchBar extends Component {

    state={ term: '' }
  
    onInputChange = e => {
        this.setState({ term: e.target.value })
    }

    onFormSubmit = e => {
        e.preventDefault()
        // callback to search api
    }

    render() {
        return (
            <section className='search-bar ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <section className='field'>
                        <label>Video Search</label>
                        <input 
                            type='text' 
                            onChange={this.onInputChange}    
                            value={this.state.term}
                        />
                    </section>
                </form>
            </section>
        )
    }
}

export default SearchBar

