import React from 'react'
import styles from './styles/MiniPaletteStyles'
import { withStyles } from '@material-ui/styles'

function MiniPalette(props) {
    const { classes, paletteName, emoji, colors } = props
    const miniColorBoxes = colors.map(color => (
        <div 
        className={classes.miniColor}
        style={{backgroundColor: color.color}}
        key={color.name}
        ></div>
    ))
    return (
        <section className={classes.root} onClick={props.handleClick}>
            <section className={classes.colors}>
                {miniColorBoxes}
            </section>
            <h5 className={classes.title}>
                {paletteName} <span className={classes.emoji}>{emoji}</span>
            </h5>
        </section>
    )
}

export default withStyles(styles)(MiniPalette)