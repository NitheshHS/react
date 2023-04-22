import React, { Component } from 'react'
import InputChild from './InputChild'

class FWInput extends Component {
    constructor(props) {
      super(props)
      this.fwRef=React.createRef();
    }
    clickHandler = ()=>{
        console.log(this.fwRef);
        this.fwRef.current.focus()
    }
  render() {
    return (
      <div>
        <InputChild ref={this.fwRef}></InputChild>
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default FWInput