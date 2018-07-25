import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get_user } from '../actions'

class User extends Component {
  render() {
    const { get_user } = this.props
    const { err, isFetching, user } = this.props.user

    let data

    if (err) {
      data = err
      console.log(err)
    } else if (isFetching) {
      data = 'loading...'
    } else {
      data = user.email
    }
    return (
      <div>
        <h1 className="jumbotron-heading text-center">{data}</h1>
        <p className="text-center">
          <button onClick={() => get_user()} className="btn btn-success mr-2">
            GET RANDOM USER
          </button>
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  { get_user }
)(User)
