import React, {Component} from 'react'
import axios from 'axios'

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
                <h1>Punny Jokes</h1>
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