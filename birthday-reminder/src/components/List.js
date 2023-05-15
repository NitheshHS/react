import React from 'react'
import './style.css'
function List({people}) {
  return (
    <div className="profiles">
       {people.map(person=>(
        <article key={person.id} >
            <img className="profile-img" src={person.imgUrl} alt={person.name}></img>
            <div className="profile-info">
                <h3>{person.name}</h3>
                <p>{person.age}</p>
            </div>
        </article>
       ))}
    </div>
  )
}

export default List