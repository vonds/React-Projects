import React, { Component } from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends Component {

    state= { images: [] }

    onSubmitSearch = async search => {
        const response = await unsplash.get('/search/photos', {
            params: { query: search}, 
        })
        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <section className='App ui container' style={{ marginTop: '10px' }} >
                <SearchBar onSubmit={this.onSubmitSearch} />
                <ImageList images={this.state.images} />
            </section>
        )
    }
}

export default App