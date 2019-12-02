import React, { Component } from 'react'
import CopyToClipBoard from "react-copy-to-clipboard";
import { Link } from 'react-router-dom'
import styles from './styles/ColorBoxStyles'
import { withStyles } from '@material-ui/styles'

class ColorBox extends Component {
    constructor(props) {
        super(props)
        this.state = { copied: false }
        this.changeCopyState = this.changeCopyState.bind(this)
    }

    changeCopyState() {
        this.setState({ copied: true}, () => {
            setTimeout(() => this.setState({copied: false}), 1500)
        })
    }
    render() {
        const { name, background, moreUrl, showingFullPalette, classes } = this.props
        const { copied } = this.state
        return (
            <CopyToClipBoard text={background} onCopy={this.changeCopyState}>
                <section style={{ background }} className={classes.ColorBox}>
                    <section style={{ background}} className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}></section>
                    <section className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
                        <h1>Copied!</h1>
                        <p className={classes.copyText}>{this.props.background}</p>
                    </section>
                    <section>
                        <section className={classes.boxContent}>
                            <span className={classes.colorName}>{name}</span>
                        </section>
                        <button className={classes.copyButton}>Copy</button>
                    </section>
                    {showingFullPalette && (
                        <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                            <span className={classes.seeMore}>MORE</span>
                        </Link> 
                    )}
                    
                </section>
            </CopyToClipBoard>
        )
    }
}

export default withStyles(styles)(ColorBox)
