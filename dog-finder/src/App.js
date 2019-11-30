import React, {Component} from 'react';
import Navbar from './Navbar'
import './App.css';

class App extends Component {
  render() {
    return (
      <section className="App">
      <Navbar />
        <h1 className='display-1'>Dog App!</h1>
      </section>
    );
  }
  
}

export default App;
