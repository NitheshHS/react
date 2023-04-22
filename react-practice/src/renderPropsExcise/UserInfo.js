import React, { Component } from 'react'

class UserInfo extends Component {
  render() {
    const user = this.props.user
    return (
      <div>
        <h2>{user.firstName}</h2>
        <h3>{user.lastName}</h3>
      </div>
    )
  }
}

export default UserInfo