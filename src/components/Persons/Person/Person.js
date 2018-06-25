import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClass'
import { AuthContext } from '../../../containers/App'

import classes from './Person.css'

class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElement = React.createRef()
    }

    focus() {
        this.inputElement.current.focus()
    }

    render() {
        return (
            <Aux>
                <AuthContext.Consumer>
                    {auth => auth ? <p>I'm authenticated</p> : null}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I am {this.props.name} my age is {this.props.age}</p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElement}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person)
