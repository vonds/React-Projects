import React, {Component} from 'react'
import axios from 'axios'
import './JokeList.css'

class JokeList extends Component {
    static defaultProps = {
        numJokesToGet: 10
    }
    constructor(props) {
        super(props)
        this.state = { jokes: [] }
    }

    async componentDidMount() {
        const jokes = []
        while (jokes.length < this.props.numJokesToGet) {
            const res = await axios.get('https://icanhazdadjoke.com', { headers: { Accept: 'Application/json' } })
            jokes.push(res.data.joke)
        }
        this.setState({ jokes: jokes})
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
                        <div>{joke}</div>
                    ))}
                </section>
            </section>
        )
    }

}

export default JokeList