import React from "react";

function ChildComponent(props){
    return(
        <div>
           <button onClick={props.message}>Click to get message</button>
        </div>
    )
}
export default ChildComponent;