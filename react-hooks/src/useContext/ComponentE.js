import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { LastNameContext, UserNameContext } from '../App'

function ComponentE() {
    const firstName = useContext(UserNameContext)
    const lastName = useContext(LastNameContext)
  return (
    <div>
        {firstName}-{lastName}
    </div>
  )
}

export default ComponentE