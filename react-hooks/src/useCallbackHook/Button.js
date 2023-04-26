import React from 'react'

function Button({children, handleClick}) {
    console.log("Calling button component");
  return (
    <div>
        <button onClick={handleClick}>{children}</button>
    </div>
  )
}

export default React.memo(Button)