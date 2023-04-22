import React, { Component } from 'react'

export class CounterProp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }
  incrementCount = ()=>{
    this.setState({count:this.state.count+1})
  }
  render() {
    return (
      <div>{this.props.render(this.state.count, this.incrementCount)}</div>
    )
  }
}

export default CounterProp