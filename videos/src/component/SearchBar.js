import React, { Component } from 'react'

class SearchBar extends Component {

    state={ search: '' }
  
    onInputChange = e => {
        this.setState({ search: e.target.value })
    }

    onFormSubmit = e => {
        e.preventDefault()
        this.props.onSearchSubmit(this.state.search)
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
                            value={this.state.search}
                        />
                    </section>
                </form>
            </section>
        )
    }
}

export default SearchBar

