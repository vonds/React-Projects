import React, { Component } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import youtube from '../apis/youtube'

class App extends Component {

    state={ 
        videos: [],
        selectedVideo: null  
    }

    componentDidMount() {
        this.onSearchSubmit('space')
    }

    onVideoSelect = video => {
        this.setState({ selectedVideo: video })
    }

    onSearchSubmit = async search => {
        const response = await youtube.get('/search', { 
            params: { q: search }
        })
        .catch(err => console.log(err))
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

   render() {
       return (
        <section className='ui container'>
            <SearchBar onSearchSubmit={this.onSearchSubmit} />
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'>
                        {this.state.selectedVideo && <VideoDetail video={this.state.selectedVideo} />}
                    </div>
                    <div className='five wide column'>
                        <VideoList
                            videos={this.state.videos}
                            onVideoSelect={this.onVideoSelect}
                        />
                    </div>
                     
                       
                </div>
            </div>
        </section>
       )
   }
}

export default App
