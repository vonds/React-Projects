import React from 'react';
import Chips from './Chips'
import Sardines from './Sardines'
import Soda from './Soda'
import VendingMachine from './VendingMachine'
import {Route, Switch} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <section className="App">
      <Switch>
          <Route exact path='/' render={() => <VendingMachine />} />
          <Route exact path='/soda' render={() => <Soda />} />
          <Route exact path='/sardines' render={() => <Sardines />} />
          <Route exact path='/chips' render={() => <Chips />} />
      </Switch>
    </section>
  );
}

export default App;
