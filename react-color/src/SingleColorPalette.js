import React, {Component} from 'react'
import ColorBox from './ColorBox'

class SingleColorPalette extends Component {
    constructor(props) {
        super(props)
        this._shades = this.gatherShades(this.props.palette, this.props.colorId)
    }

    gatherShades(palette, colorToFilterBy) {
        let shades = []
        const allColors = palette.colors
        for (let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }
        return shades.slice(1)
    }

    render() {
        const colorBoxes = this._shades.map(color => (
            <ColorBox 
                key={color.id} 
                name={color.name} 
                background={color.hex} 
                showLink={false} 
            />
        ))
        return (
            <section className='Palette'>
                <h1>Single Color Palette</h1>
                <section className='Palette-colors'>{ colorBoxes }</section>
            </section>
        )
    }
}

export default SingleColorPalette