import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'

class App extends Component {
  render() {
    console.dir(this.props)
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{this.props.counter}</h1>
        <p className="text-center">
          <button
            onClick={() => this.props.dispatch({ type: 'INCREMENT' })}
            className="btn btn-primary mr-2"
          >
            Increase
          </button>
          <button
            onClick={() => this.props.dispatch({ type: 'DECREMENT' })}
            className="btn btn-danger my-2"
          >
            Decrease
          </button>
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    counter: state.counter
  }
}
App.propTypes = {
  counter: propTypes.number.isRequired
}

export default connect(mapStateToProps)(App)
