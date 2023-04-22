import React, { Component } from 'react'

 class Hero extends Component {
    
  render() {
    if(this.props.heroname==='Joker'){
        throw new Error('Not A Hero')
    }
    return (
      <div>
        {this.props.heroname}
      </div>
    )
  }
}

export default Hero