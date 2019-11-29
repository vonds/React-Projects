import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Soda extends Component {
    render() {
        return (
            <section className='Soda'>
                <h1>Soda</h1>
                <Link exact to='/'>Go Back</Link>
            </section>
        )
    }
}

export default Soda