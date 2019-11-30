import React, {Component} from 'react'
import './ColorBox.css'

class ColorBox extends Component {
    render() {
        const { name, background } = this.props
        return (
            <section style={{ background }} className='ColorBox'>
                <section className='copy-container'>
                    <section className='box-content'>
                        <span>{ name}</span>
                    </section>
                    <button className='copy-button'>Copy</button>
                </section>
                <span className='see-more'>More</span>
            </section>
        )
    }
}

export default ColorBox