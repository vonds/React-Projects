import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class PaletteList extends Component {
    render() {
        const { palettes } = this.props
        return (
            <section className='PaletteList'>
                <h1>React Colors</h1>
                { palettes.map(palette => (
                    <p>
                        <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
                    </p>
                    
                )) }
            </section>
        )
    }
}

export default PaletteList