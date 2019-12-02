import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Slider from 'rc-slider'
import styles from './styles/NavbarStyles'
import { withStyles } from '@material-ui/styles'
import 'rc-slider/assets/index.css'



class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = { format: 'hex', open: false }
        this.handleFormatChange = this.handleFormatChange.bind(this)
        this.closeSnackbar = this.closeSnackbar.bind(this)
    }

    handleFormatChange(e) {
        this.setState({ format: e.target.value, open: true })
        this.props.handleChange(e.target.value)
    }

    closeSnackbar() {
        this.setState({ open: false })
    }

    render() {
        const { level, changeLevel, showingAllColors, classes } = this.props
        const { format } = this.state
        return (
            <header className={classes.Navbar}>
                <section className={classes.logo}>
                    <Link to='/'>reactColorPicker</Link>
                </section>
                { showingAllColors && ( <section>
                    <span>Level: { level }</span>
                    <section className={classes.slider}>
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={changeLevel}
                        />
                    </section>
                </section>
                )}
                <section className={classes.selectContainer}>
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                        <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
                        <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
                    </Select>
                </section>
                <Snackbar 
                    anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}     
                    open={this.state.open}
                    autoHideDuration={3000}    
                    message={<span id='message-id'>Format Changed To {format.toUpperCase()}</span>}
                    ContentProps={{ "aria-describeby": "message-id" }}
                    onClose={this.closeSnackbar}
                    action={[ 
                    <IconButton 
                        onClick={this.closeSnackbar} 
                        color='inherit' 
                        key='close' 
                        aria-label='close'
                    >
                        <CloseIcon />
                    </IconButton>
                    ]}
                    />
            </header>
        )
    }
}

export default withStyles(styles)(Navbar)