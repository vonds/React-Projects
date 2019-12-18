import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {
    const video = videos.map(video => (
        <VideoItem 
            key={video.id.videoId} 
            onVideoSelect={onVideoSelect} 
            video={video}
        />
    ))
    return (
        <section className='ui relaxed divided list'>
           {video}
        </section>
    )
}

export default VideoList