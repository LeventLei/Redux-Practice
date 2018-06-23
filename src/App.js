import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { increment, decrement } from './actions'

class App extends Component {
  render() {
    const { increment, decrement } = this.props
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{this.props.counter}</h1>
        <p className="text-center">
          <button
            onClick={() => increment('LeventLei')}
            className="btn btn-primary mr-2"
          >
            Increase
          </button>
          <button
            onClick={() => decrement('LoveDan')}
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
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: name => {
      dispatch(increment(name))
    },
    decrement: name => {
      dispatch(decrement(name))
    }
  }
}

App.propTypes = {
  counter: propTypes.number.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
