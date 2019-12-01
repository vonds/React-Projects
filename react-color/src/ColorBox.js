import React, { Component } from 'react'
import CopyToClipBoard from "react-copy-to-clipboard";
import { Link } from 'react-router-dom'
import chroma from 'chroma-js'
import { withStyles } from '@material-ui/styles'
import './ColorBox.css'

const styles = {
    ColorBox: {
        width: '20%',
        height: props => props.showingFullPalette ? '25%' : '50%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        "&:hover button": {
            opacity: 1
        }
    },
    copyText:  {
        color: props => (
            chroma(props.background).luminance() >= 0.4 ? 'black' : 'white'
        )
    },
    colorName: {
        color: props => (
            chroma(props.background).luminance() <= 0.08 ? 'white' : 'black'
        )
    },
    seeMore: {
        color: props => (
            chroma(props.background).luminance() >= 0.4 ? 'black' : 'white'
        ),
        background: 'rgba(255, 255, 255, 0.3)',
        position: 'absolute',
        border: 'none',
        right: '0',
        bottom: '0',
        width: '60px',
        height: '30px',
        textAlign: 'center',
        lineHeight: '30px',
        textTransform: 'uppercase'
    }, 
    copyButton : {
        color: props => (
            chroma(props.background).luminance() >= 0.4 ? 'black' : 'white'
        ),
        width: '100px',
        height: '30px',
        position: 'absolute',
        display: 'inline-block',
        top: '50%',
        left: '50%',
        marginLeft: '-50px',
        marginTop: '-15px',
        textAlign: 'center',
        outline: 'none',
        background: 'rgba(255, 255, 255, 0.3)',
        fontSize: '1rem',
        lineHeight: '30px',
        textTransform: 'uppercase',
        border: 'none',
        textDecoration: 'none',
        opacity: 0
    },
    boxContent: {
        position: 'absolute',
        width: '100%',
        left: '0',
        bottom: '0',
        padding: '10px',
        color: 'black',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px'
    },
    copyOverlay: {
        opacity: '0',
        zIndex: '0',
        width: '100%',
        height: '100%',
        transform: 'scale(0.1)'
    },
    showOverlay: {
        opacity: '1',
        transform: 'scale(50)',
        zIndex: '10',
        position: 'absolute',
        transition: 'transform 0.6s ease-in -out'
    },
    copyMessage: {
        position: 'fixed',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        fontSize: '4rem',
        transform: 'scale(0.1)',
        opacity: '0',
        color: 'white',
        '& h1': {
            fonteight: '400',
            textShadow: '1px 2px black',
            background: 'rgba(255, 255, 255, 0.2)',
            width: '100%',
            textAlign: 'center',
            marginBottom: '0',
            padding: '1rem',
            textTransform: 'uppercase'
        },
        '& p': {
            fontize: '2rem',
            fonteight: '100',
        }
    },
    showMessage: {
        opacity: '1',
        transform: 'scale(1)',
        zIndex: '25'
    }

}

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
