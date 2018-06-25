import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: '1241dw', name: 'Max', age: 28, },
      { id: 'efsdvteb', name: 'John', age: 12 },
      { id: '12evbryuy', name: 'Steve', age: 22 },
    ],
    showPerson: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id)

    const person = { ...this.state.persons[personIndex] }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson
    this.setState({
      showPerson: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white', 
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px', 
      cursor: 'pointer'
    }

    let persons = null

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              click={() => this.deletePersonHandler(index)}
              key={person.id} />
          ))}
        </div>
      )

      style.backgroundColor = 'red'
    }

    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
      <div className="App">
        <h1>App</h1>
        <p className={classes.join(' ')}>This is really work</p>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Show</button>
        {persons}
      </div>
    );
  }
}

export default App;
