import React, { Component } from 'react'
import CopyToClipBoard from "react-copy-to-clipboard";
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
        const { name, background } = this.props
        const { copied } = this.state
        return (
            <CopyToClipBoard text={background} onCopy={this.changeCopyState}>
                <section style={{ background }} className='ColorBox'>
                    <section style={{ background}} className={`copy-overlay ${copied && 'show'}`}></section>
                    <section className={`copy-msg ${copied && 'show'}`}>
                        <h1>Copied!</h1>
                        <p>{this.props.background}</p>
                    </section>
                    <section className='copy-container'>
                        <section className='box-content'>
                            <span>{name}</span>
                        </section>
                        <button className='copy-button'>Copy</button>
                    </section>
                    <span className='see-more'>More</span>
                </section>
            </CopyToClipBoard>
        )
    }
}

export default ColorBox
