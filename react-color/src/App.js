import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import Palette from './Palette'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'

class App extends Component {
  
  render() { 
    return (
      <Switch>
        <Route exact path='/' render={() => <h1>Pallete list goes here</h1>} />
        <Route exact path='/palette/:id' render={() => <h1>Individual Palette</h1>}/>
      </Switch>
      
      // <section className="App">
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </section>
    )
  }
}

export default App
