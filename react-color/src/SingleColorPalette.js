import React, {Component} from 'react'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'
import ColorBox from './ColorBox'
import styles from './styles/PaletteStyles'
import { withStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'

class SingleColorPalette extends Component {
    constructor(props) {
        super(props)
        this._shades = this.gatherShades(this.props.palette, this.props.colorId)
        this.state = { format: 'hex' }
        this.changeFormat = this.changeFormat.bind(this)
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

    changeFormat(val) {
        this.setState({ format: val })
    }

    render() {
        const { format } = this.state
        const { paletteName, emoji, id } = this.props.palette
        const { classes } = this.props
        const colorBoxes = this._shades.map(color => (
            <ColorBox 
                key={color.name} 
                name={color.name} 
                background={color[format]} 
                showingFullPalette={false}
            />
        ))
        return (
            <section className={classes.Palette}>
                <Navbar handleChange={this.changeFormat} showingAllColors={false} />
                <section className={classes.colors}>
                    { colorBoxes }
                    <section className={classes.goBack}>
                        <Link to={`/palette/${id}`} className='back-button'>GO BACK</Link>
                    </section>
                </section>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </section>
        )
    }
}

export default withStyles(styles)(SingleColorPalette)