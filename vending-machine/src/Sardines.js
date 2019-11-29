import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Sardines extends Component {
    render() {
        return (
            <section className='Sardines'>
                <h1>Sardines</h1>
                <Link exact to='/'>Go Back</Link>
            </section>
        )
    }
}

export default Sardines