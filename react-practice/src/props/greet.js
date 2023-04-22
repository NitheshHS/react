import React from 'react';

//To read props from parent add argument to method as props
// and call the props 
//IMP: props are immutable in nature

function Greet(props){
    console.log(props);
    return(
        <div>
            <h1>Hello {props.name}</h1>
            {props.children}
        </div>
    )
}
export default Greet;