import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './DogList.css'

class DogList extends Component {
    render() {
        return (
            <section className='DogList'>
                <h1 className='display-1 text-center mb-5'>Dog List</h1>
                    <section className='row'>
                        {this.props.dogs.map(dog => (
                            <section className='Dog col-lg-4 text-center' key={dog.name}>
                                <Link to={`dogs/${dog.name}`} >
                                    <img src={dog.src} alt={dog.name} />
                                    <h3 className='mt-3 underline'>{dog.name}</h3>
                                </Link> 
                            </section>
                        ))}    
                    </section>
                </section>
        )
    }
}

export default DogList