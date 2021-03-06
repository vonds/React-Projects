import React, {Component} from 'react'
import Card from './Card'
import axios from 'axios'
import './Deck.css'

const API_URL_BASE = "https://deckofcardsapi.com/api/deck/"

class Deck extends Component {
    constructor(props) {
        super(props)
        this.state = {deck: null, drawn: []}
        this.getCard = this.getCard.bind(this)
    }

    async componentDidMount() {
        const deck = await axios.get(`${API_URL_BASE}/new/shuffle/?deck_count=1`)
        this.setState({ deck: deck.data })
    }

    async getCard() {
        const id = this.state.deck.deck_id
        try {
            const cardUrl = `${API_URL_BASE}/${id}/draw/?count=1`
            const cardRes = await axios.get(cardUrl)
            if (!cardRes.data.success) throw new Error("No cards remaing")
            const card = cardRes.data.cards[0]
            this.setState(state => ({
                drawn: [
                    ...state.drawn,
                    {
                        id: card.code,
                        image: card.image,
                        name: `${card.value} of ${card.suit}`
                    }
                ]
            }))
        } catch (err) {
            alert(err)
        }
        
       
    }

    render() {
        const cards = this.state.drawn.map(card => (
            <Card key={card.id} name={card.name} image={card.image}/>
        ))
        return (
            <section className='Deck'>
                <h1 className='Deck-title'>Card Dealer</h1>
                <h2 className='Deck-title subtitle'>A demo made with React</h2>
                <button className='Deck-btn' onClick={this.getCard}>Get Card</button>
                <section className='Deck-cardarea'>
                    {cards}
                </section>
               
            </section>
        )
    }
}

export default Deck