import React, {Component} from 'react'
import './DogList.css'

class DogList extends Component {
    render() {
        return (
            <section className='DogList'>
                <h1 className='display-1 text-center'>Dog List</h1>
                <section className='container'>
                    <section className='row'>
                        {this.props.dogs.map(dog => (
                            <section className='Dog col-lg-4 text-center' key={dog.name}>
                                <img src={dog.src} alt={dog.name} />
                                <h3>{dog.name}</h3>
                            </section>
                        ))}    
                    </section>
                </section>
            </section>
        )
    }
}

export default DogList