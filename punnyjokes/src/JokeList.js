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
        this.state = {
            jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]" ), 
            loading: false
            }
        this.seenJokes = new Set(this.state.jokes.map(joke => joke.text))
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        if (this.state.jokes.length === 0) this.getJokes()
    }

   async getJokes() {
       try {
           const jokes = []
           while (jokes.length < this.props.numJokesToGet) {
               const res = await axios.get('https://icanhazdadjoke.com', { headers: { Accept: 'Application/json' } })
               const newJoke = res.data.joke
               if (!this.seenJokes.has(newJoke)) {
                   jokes.push({ id: uuid(), text: newJoke, votes: 0 })
               } else {
                   console.log("Found a duplicate")
                   console.log(newJoke)
               }
           }
           this.setState(state => ({
               loading: false,
               jokes: [...state.jokes, ...jokes]
           }))
           window.localStorage.setItem('jokes', JSON.stringify(jokes))
       } catch(e) {
        alert(e)
        this.setState({ loading: false })
       }
    
    }

    handleVote(id, delta) {
        this.setState(state => ({
            jokes: state.jokes.map(joke =>
                 joke.id === id ? {...joke, votes: joke.votes + delta} : joke)
        }),
        () => 
            window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
        )
    }

    handleClick() {
        this.setState({ loading: true }, this.getJokes)
        
    }

    render() {
        if (this.state.loading) {
            return (
                <section className='JokeList-spinner'>
                    <i className='far fa-8x fa-laugh fa-spin'/>
                    <h1 className='JokeList-title'>Loading... </h1>
                </section>
            )
        }
        const jokes = this.state.jokes.sort((a,b) => b.vote - a.vote) 
        return (
            <section className='JokeList'>
                <section className='JokeList-sidebar'>
                    <h1 className='JokeList-title'><span>Punny</span> Jokes</h1>
                    <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg'></img>
                    <button className='JokeList-getmore' onClick={this.handleClick}>New Jokes</button>
                </section>
                <section className='JokeList-jokes'>
                    {jokes.map(joke => (
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