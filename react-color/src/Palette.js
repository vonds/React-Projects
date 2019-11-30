import React, {Component} from 'react'
import ColorBox from './ColorBox'
import './Palette.css'

class Palette extends Component {
    render() {
        const colorBoxes = this.props.colors.map(color => (
            <ColorBox background={color.color} name={color.name} />
        ))
        return (
            <section className='Palette'>
                {/* Navbar goes here */}
                <section className='Palette-colors'>
                   {colorBoxes}
                </section>
                {/* footer */}
            </section>
        )
    }
}

export default Palette