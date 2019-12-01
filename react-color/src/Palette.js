import React, {Component} from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'
import './Palette.css'

class Palette extends Component {
    constructor(props) {
        super(props)
        this.state = { level: 500, format: 'hex' }
        this.changeLevel = this.changeLevel.bind(this)
        this.changeFormat = this.changeFormat.bind(this)
    }
    changeLevel(level) {
        this.setState({ level })
    }

    changeFormat(val) {
        this.setState({ format: val })
    }

    render() {
        const { colors, emoji, paletteName, id  } = this.props.palette 
        const { level, format } = this.state
        const colorBoxes = colors[level].map(color => (
            <ColorBox 
                background={color[format]} 
                name={color.name} 
                key={color.id} 
                id={color.id}
                paletteId={id}
                moreUrl={`/palette/${id}/${color.id}`}
                showLink={true}
            />
        ))
        return (

            <section className='Palette'>
                <Navbar 
                    level={level} 
                    changeLevel={this.changeLevel} 
                    handleChange={this.changeFormat}
                    showingAllColors={true}
                    />
                <section className='Palette-colors'>{colorBoxes}</section>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </section>
        )
    }
}

export default Palette