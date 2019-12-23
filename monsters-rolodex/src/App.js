import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super (props)
    this.state = { monsters: [] }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}))
      .catch(err => console.log(err))
  }

  handleClick = () => {
    this.setState({ 'string': 'Hello milk milk' })
  }

  render() {
    return (  
      <div className="App">
        {
          this.state.monsters.map(monster => (
            <h1 key={monster.id}>{monster.name}</h1>
            ))
        }
      </div>
    );
  }
}
export default App;
