import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette'
import styles from './styles/PaletteListStyles'
import { withStyles } from '@material-ui/styles'

class PaletteList extends Component {
    goToPalette(id) {
        this.props.history.push(`/palette/${id}`)
    }
    render() {
        const { palettes, classes } = this.props
        return (
            <section className={classes.root}>
                <section className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                        <Link to='/palette/new'>Create Palette</Link>
                    </nav>
                    <section className={classes.palettes}>
                        {palettes.map(palette => (
                            <MiniPalette {...palette} handleClick={() => this.goToPalette(palette.id)}/>
                        ))}
                    </section>
                </section>
            </section>
        )
    }
}

export default withStyles(styles)(PaletteList)