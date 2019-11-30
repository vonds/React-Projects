import React, {Component} from 'react'
import Palette from './Palette'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'

class App extends Component {
  
  render() { 
    return (
      <section className="App">
        <h1>React Colors App</h1>
        <Palette palette={generatePalette(seedColors[4])} />
      </section>
    )
  }
}

export default App
