import React, { Component } from 'react'
import ThemeContext from './ThemeContext'

class ToolButton extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {theme=>{
            return <h1>You have selected theme: {theme}</h1>
        }}
      </ThemeContext.Consumer>
    )
  }
}


export default ToolButton