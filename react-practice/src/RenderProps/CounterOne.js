import React, { Component } from 'react'

class CounterOne extends Component {

  render() {
    const {count, incrementCount}= this.props
    return (
      <div>
        <button onClick={incrementCount}>clicked {count} times</button>
      </div>
    )
  }
}

export default CounterOne