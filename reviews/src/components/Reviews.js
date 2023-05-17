import React, { useState } from 'react'
import reviews from '../assets/Data';
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa'
import './style.css'
function Reviews() {
    const [index, setIndex] = useState(0);
    const {name, job, image, text}=reviews[index];

    const checkNumber = (number)=>{
        if(number > reviews.length-1){
            return 0
        }
        if(number < 0){
            return reviews.length-1
        }
        return number
    }

    const prevPerson = ()=>{
        setIndex(prevIndex => checkNumber(prevIndex-1))
    }

    const nextPerson = ()=>{
        setIndex(prevIndex => checkNumber(prevIndex+1))
    }


  return (
    <article className="review">
        <div className="img-container">
            <img src={image} alt={name} className="profile-image"></img>
            <span className='quote-icon'>
                {/* <FaQuoteRight></FaQuoteRight> */}
            </span>
        </div>
            <h2 className="autor">{name}</h2>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="forward-icons">
                <button className="left-icon" onClick={prevPerson}>
                <FaChevronLeft />
                </button>
                <button className="right-icon" onClick={nextPerson}>
                <FaChevronRight />
                </button>
            
            
            </div>
    </article>
  )
}

export default Reviews