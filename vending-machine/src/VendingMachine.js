import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class VendingMachine extends Component {
    render() {
        return (
            <section className='VendingMachine'>
                <h1>Vending Machine</h1>
                <Link exact to='/soda'>Soda</Link>
                <Link exact to='/chips'>Chips</Link>
                <Link exact to='/sardines'>Sardines</Link>
            </section>
        )
    }
}

export default VendingMachine