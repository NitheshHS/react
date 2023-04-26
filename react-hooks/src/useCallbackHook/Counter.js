import React from 'react'

function Counter({text, value}) {
    console.log("Calling counter component");
  return (
    <div>
        {text}-{value}
    </div>
  )
}

export default React.memo(Counter)