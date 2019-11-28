import React, { Component } from 'react'
import './Joke.css'

class Joke extends Component {
    getColor() {
        if (this.props.votes >= 15) return "#4CAF50"
        if (this.props.votes >= 12) return "#8BC34A"
        if (this.props.votes >= 9) return "#CDDC39"
        if (this.props.votes >= 6) return "#FFEB3B"
        if (this.props.votes >= 3) return "#FFC107"
        if (this.props.votes >= 0) return "#FF9800"
        if (this.props.votes < 0 ) return "#f44336"
    }

    getEmoji() {
        if (this.props.votes >= 15) return "em em-rolling_on_the_floor_laughing"
        if (this.props.votes >= 12) return "em em-laughing"
        if (this.props.votes >= 9) return "em em-smiley"
        if (this.props.votes >= 6) return "em em-slightly_smiling_face"
        if (this.props.votes >= 3) return "em em-neutral_face"
        if (this.props.votes >= 0) return "em em-confused"
        if (this.props.votes < 0) return "em em-angry"
    }
    
    render() {
        return (
            <section className='Joke'>
                <div className='Joke-buttons'>
                    <i className='fas fa-arrow-up' onClick={this.props.upvote} />
                    <span className='Joke-votes' style={{borderColor: this.getColor()}}>
                        {this.props.votes}
                    </span>
                    <i className='fas fa-arrow-down' onClick={this.props.downvote} />
                </div>
                <div className='Joke-text'>{this.props.text}</div>
                <div className='Joke-smiley'>
                    <i className={this.getEmoji()}/>
                </div>
            </section>
        )
    }

}

export default Joke