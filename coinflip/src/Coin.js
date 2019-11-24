import React, {Component} from 'react'
import "./Coin.css"

class Coin extends Component {
    render() {
        const { side, imgSrc } = this.props.info
        return  (
            <section className="Coin">
                <img src={imgSrc} alt={side} />
            </section>
        )
    }
}

export default Coin