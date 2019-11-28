import React, {Component}  from 'react'

class Card extends Component {
    render() {
        const { image, name } = this.props
        return (
           <img 
            className='Card'
            src={image} 
            alt={name} 
            />
        )
    }
}

export default Card