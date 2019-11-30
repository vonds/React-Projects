import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom'

class Navbar extends Component {
    render() {
        const dogLinks = this.props.dogs.map(dog => (
            <li className='nav-items' key={dog.name}>
                <NavLink exact className="nav-link" to={`/dogs/${dog.name}`} >
                    {dog.name}
                </NavLink>
            </li>
        )) 
        return (
            <section className='Navbar'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
                    <Link className="navbar-brand" to="/dogs">Dog App</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink exact className="nav-link" to="/dogs">
                                Home 
                                </NavLink>
                            </li>
                           {dogLinks}
                        </ul>
                    </div>
                </nav>
            </section>
        )
    }
}

export default Navbar