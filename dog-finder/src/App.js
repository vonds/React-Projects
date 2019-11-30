import React, {Component} from 'react';
import Navbar from './Navbar'
import Routes from './Routes'
import DogDetails from './DogDetails'
import whiskey from './image/whiskey.jpg'
import moofy from './image/moofy.jpg'
import hazel from './image/hazel.jpg'
import './App.css';

class App extends Component {
  static defaultProps = {
    dogs : [
      {
        name: 'Whiskey',
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: 'Hazel',
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy.",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs"
        ]
      },
      {
        name: 'Moofy',
        age: 4,
        src: moofy,
        facts: [
          "Moofy is very affectionate",
          "Moofy does not like walks",
          "Moofy love to people and other dogs"
        ]
      },
    ]
  }
  render() {
    

    return (
      <section className='App'>
        <Navbar dogs={this.props.dogs}/>
        <Routes dogs={this.props.dogs}/>
      </section>    
    );
  }
  
}

export default App;
