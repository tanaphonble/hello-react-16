import React, { PureComponent } from 'react'
import classes from './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import Aux from '../hoc/Aux'
import withClass from '../hoc/withClass'

export const AuthContext = React.createContext(false)
class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { id: '1241dw', name: 'Max', age: 28, },
        { id: 'efsdvteb', name: 'John', age: 12 },
        { id: '12evbryuy', name: 'Steve', age: 22 },
      ],
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    }
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
    const doesShow = this.state.showPersons
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  loginHandler = () => {
    this.setState({
      authenticated: true
    })
  }

  render() {
    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      )
    }

    return (
      <Aux>
        <button onClick={() => {
          this.setState({
            showPersons: true
          })
        }}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonHandler}
          login={this.loginHandler} />
        <AuthContext.Provider
          value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </Aux>
    )
  }
}

export default withClass(App, classes.App)
