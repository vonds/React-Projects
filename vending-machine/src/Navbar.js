import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'


class Navbar extends Component {
    render() {
        return (
            <section className='Navbar'>
                <NavLink exact activeClassName='Navbar-active' to='/'>Home</NavLink>
                <NavLink exact activeClassName='Navbar-active' to='/chips'>Chips</NavLink>
                <NavLink exact activeClassName='Navbar-active' to='/soda'>Soda</NavLink>
                <NavLink exact activeClassName='Navbar-active' to='/sardines'>Sardines</NavLink>
            </section>
        )
    }
}

export default Navbar