import React, {Component} from 'react'
import Palette from './Palette'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'

class App extends Component {
  
  render() { 
    return (
      <section className="App">
        <Palette palette={generatePalette(seedColors[4])} />
      </section>
    )
  }
}

export default App
