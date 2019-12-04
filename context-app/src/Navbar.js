import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import Switch from '@material-ui/core/Switch'
import SearchIcon from '@material-ui/icons/Search'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles/NavbarStyles'

class Navbar extends Component {
    render() {
        const { classes } = this.props
        return (
            <section className={classes.root}>
                <AppBar position='static' color='primary'>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color='inherit'>
                            <span>🇫🇷</span>
                        </IconButton>
                        <Typography 
                            className={classes.title} 
                            variant='h6'
                            color='inherit'
                        >
                            App Title
                        </Typography>
                        <Switch />
                        <section className={classes.grow}></section>
                        <section className={classes.search}>
                            <section className={classes.searchIcon}>
                                <SearchIcon />
                                <InputBase placeholder='Search...' classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput
                                }}/>
                            </section>
                        </section>
                    </Toolbar>
                </AppBar>
            </section>
        )
    }
}

export default withStyles(styles)(Navbar)