import React, {Component} from 'react'
import Joke from './Joke'
import axios from 'axios'
import uuid from 'uuid/v4'
import './JokeList.css'

class JokeList extends Component {
    static defaultProps = {
        numJokesToGet: 10
    }
    constructor(props) {
        super(props)
        this.state = { jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]" ) }
        this.handleVote = this.handleVote.bind(this)
    }

    componentDidMount() {
        if (this.state.jokes.length === 0) this.getJokes()
    }

   async getJokes() {
        const jokes = []
        while (jokes.length < this.props.numJokesToGet) {
            const res = await axios.get('https://icanhazdadjoke.com', { headers: { Accept: 'Application/json' } })
            jokes.push({ id: uuid(), text: res.data.joke, votes: 0 })
        }
        this.setState({ jokes: jokes })
        window.localStorage.setItem('jokes', JSON.stringify(jokes))
    }

    handleVote(id, delta) {
        this.setState(state => ({
            jokes: state.jokes.map(joke =>
                 joke.id === id ? {...joke, votes: joke.votes + delta} : joke)
        }))
    }

    render() {
        return (
            <section className='JokeList'>
                <section className='JokeList-sidebar'>
                    <h1 className='JokeList-title'><span>Punny</span> Jokes</h1>
                    <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg'></img>
                    <button className='Jokelist-getmore'>New Jokes</button>
                </section>
                <section className='JokeList-jokes'>
                    {this.state.jokes.map(joke => (
                        <Joke 
                            key={joke.id} 
                            text={joke.text} 
                            votes={joke.votes} 
                            upvote={() => this.handleVote(joke.id, 1)}
                            downvote={() => this.handleVote(joke.id, -1)}
                        />
                    ))}
                </section>
            </section>
        )
    }

}

export default JokeList