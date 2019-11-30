import React, {Component} from 'react'
import './ColorBox.css'

class ColorBox extends Component {
    render() {
        return (
            <section style={{background: this.props.background}} className='ColorBox'>
                <span>{this.props.name}</span>
                <span>More</span>
            </section>
        )
    }
}

export default ColorBox