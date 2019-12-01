import React, { Component } from 'react'
import CopyToClipBoard from "react-copy-to-clipboard";
import { Link } from 'react-router-dom'
import chroma from 'chroma-js'
import './ColorBox.css'

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
        const { name, background, moreUrl, showLink } = this.props
        const { copied } = this.state
        const isDarkColor = chroma(background).luminance() <= 0.08
        const isLightColor = chroma(background).luminance() >= 0.7
        return (
            <CopyToClipBoard text={background} onCopy={this.changeCopyState}>
                <section style={{ background }} className='ColorBox'>
                    <section style={{ background}} className={`copy-overlay ${copied && 'show'}`}></section>
                    <section className={`copy-msg ${copied && 'show'}`}>
                        <h1>Copied!</h1>
                        <p className={isLightColor && 'dark-text'}>{this.props.background}</p>
                    </section>
                    <section className='copy-container'>
                        <section className='box-content'>
                            <span className={isDarkColor && 'light-text'}>{name}</span>
                        </section>
                        <button className={`copy-button ${isLightColor && 'dark-text'}`}>Copy</button>
                    </section>
                    {showLink && (
                        <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                            <span className={`see-more ${isLightColor && 'dark-text'}`}>MORE</span>
                        </Link> 
                    )}
                    
                </section>
            </CopyToClipBoard>
        )
    }
}

export default ColorBox
