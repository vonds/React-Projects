import React, { Component } from 'react'

class Box extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.removeBox(this.props.id)
    }

    render() {
        return (
            <section className='Box'>
                <div style={{
                    height: `${this.props.height}em`,
                    width: `${this.props.width}em`,
                    backgroundColor: this.props.color
                }}></div>
                <button onClick={this.handleClick}>X</button>
            </section>
        )
    }
}

export default Box