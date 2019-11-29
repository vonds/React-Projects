import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Chips extends Component {
    render() {
        return (
            <section className='Chips'>
                <h1>Chips</h1>
                <Link exact to='/'>Go Back</Link>
            </section>
        )
    }
}

export default Chips