import React, {Component} from 'react'
import Palette from './Palette'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'

class App extends Component {
  
  render() {
    console.log(generatePalette(seedColors[2]))
    return (
      <section className="App">
        <h1>React Colors App</h1>
        <Palette {...seedColors[2]}/>
      </section>
    )
  }
}

export default App
