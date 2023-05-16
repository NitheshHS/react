import React, { useContext, useState } from 'react'
import './style.css'
import { ToursContext } from '../context/TourContext'
function Tour({id, image, info, price, name}) {
  
  const {removeTour}=useContext(ToursContext);
  const [readMore, setReadMore]=useState(false)

  return (
    <article className="single-tour">
        <img src={image} alt={id}></img>
        <footer >
          <div className="tourInfo">
          <h2>{name}</h2>
          <h2 className="tour-price">${price}</h2>
          </div>
          <p>{readMore?info:`${info.substring(0,150)}....`}
          <button className='readmore' onClick={()=>setReadMore(!readMore)}>{readMore?'Show less':'Read more'}</button></p>
          <button class="delete-btn" onClick={()=>removeTour(id)}>Not interested</button>
        </footer>
    </article>
  )
}

export default Tour