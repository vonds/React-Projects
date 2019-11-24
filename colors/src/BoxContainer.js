import React, { Component } from 'react'
import Box from './Box'
import './BoxContainer.css'

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 8,
        allColors: [
            'purple',
            'magenta',
            'blue',
            'teal',
        ]
    }

    render( ){
        const boxes = Array.from({length: this.props.numBoxes}).map(
            () => <Box colors={this.props.allColors} />
        )
        return <section className="BoxContainer">{boxes}</section>
    }
}

export default BoxContainer