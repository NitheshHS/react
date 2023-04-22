import React, { Component } from 'react'

class User extends Component {
constructor(props) {
  super(props)

  this.state = {
     firstName:'Nithesh',
     lastName:'Gowda'
  }
}
  render() {
    return (
      <div>{this.props.render(this.state)}</div>
    )
  }
}

export default User