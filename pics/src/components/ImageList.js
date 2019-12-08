import React from 'react'
import ImageCard from './ImageCard'
import './imageList.css'

const ImageList = props => {
    const images = props.images.map(image => {
        return <ImageCard image={image} key={image.id} />
    })
    return (
        <section className='image-list'>
            {images}
        </section>
    )
}

export default ImageList