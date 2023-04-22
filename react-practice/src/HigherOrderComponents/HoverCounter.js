import React, { Component } from 'react'
import WithCounter from './WithCounter'
class HoverCounter extends Component {
    
  render() {
    const {count,incrementCount} = this.props
    return (
      <div>
        <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
      </div>
    )
  }
}

export default WithCounter(HoverCounter)