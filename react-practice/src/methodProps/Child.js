import React from "react";

function Child(props){
    return(
        <button onClick={()=>props.greetHandler('Child')}>Click Parent</button>
    )
}
export default Child;