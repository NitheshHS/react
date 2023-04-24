import React from 'react'
import { LastNameContext, UserNameContext } from '../App'

function ComponentF() {
  return (
    <div>
      <UserNameContext.Consumer>
        {user=>{
          return(<LastNameContext.Consumer>
            {lastname=>{
              return (<h1>UserName: {user} lastname:{lastname}</h1>)
            }}
          </LastNameContext.Consumer>)
        }}
      </UserNameContext.Consumer>
    </div>
  )
}

export default ComponentF