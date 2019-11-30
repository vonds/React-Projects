import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './DogDetails.css'

class DogDetails extends Component {
    render() {
        let {dog} = this.props
        return (
            <section className='DogDetails row justify-content-center mt-5'>
                <section className='col-11 col-lg-5'>
                    <section className='DogDetails-card card'>
                        <img className='card-img-top img-fluid' src={dog.src} alt={dog.name} />
                        <section className='card-body'>
                            <h1 className='card-title'>{dog.name}</h1>
                            <h4 className='card-subtitle text-muted'>{dog.age} years old</h4>
                        </section>
                        <ul className='list-group list-group-flush'>
                            {dog.facts.map((fact, i) => (
                                <li className='list-group-item' key={i}>{fact}</li>
                            ))}
                        </ul>
                        <section className='card-body'>
                            <Link to='/dogs' className='btn btn-info'>Go Back</Link>
                        </section>
                    </section>
                </section>
            </section>
        )
    }
}

export default DogDetails