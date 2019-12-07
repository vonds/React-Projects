import React, { Component } from 'react'
import SearchBar from './SearchBar'

class App extends Component {

    onSubmitSearch = search => console.log(search)

    render() {
        return (
            <section className='App ui container' style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSubmitSearch} />
            </section>
        )
    }
}

export default App