import React from "react";

function Person({person}){
    return(
        <div>
            <h2>{person.name}</h2>
            <h3>{person.age}</h3>
            <p>{person.skill}</p>
        </div>
    )
}

export default Person;