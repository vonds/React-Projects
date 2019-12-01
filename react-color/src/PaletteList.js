import React, {Component} from 'react'
import MiniPalette from './MiniPalette'
import { Link } from 'react-router-dom'

class PaletteList extends Component {
    render() {
        const { palettes } = this.props
        return (
            <section className='PaletteList'>
            <MiniPalette />
                <h1>React Colors</h1>
                { palettes.map(palette => (
                   <MiniPalette {...palette}/>
                    
                )) }
            </section>
        )
    }
}

export default PaletteList