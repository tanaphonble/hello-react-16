import React, { PureComponent } from 'react'
import Person from './Person/Person'

class Persons extends PureComponent {
    constructor(props) {
        super(props)
        this.lastPersonRef = React.createRef()
    }

    componentDidMount() {
        this.lastPersonRef.current.focus()
    }

    render() {
        return this.props.persons.map((person, index) => (
            <Person
                name={person.name}
                age={person.age}
                ref={this.lastPersonRef}
                position={index}
                click={() => this.props.clicked(index)}
                changed={(event) => this.props.changed(event, person.id)}
                key={person.id} />
        ))
    }
}

export default Persons