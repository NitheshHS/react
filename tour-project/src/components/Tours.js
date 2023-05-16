import React, { useContext } from 'react'
import './style.css'
import Tour from './Tour'
import { ToursContext } from '../context/TourContext'
function Tours() {

  const {tours} = useContext(ToursContext);

  return (
    <section>
        <h2 className='title'>Our Tours</h2>
        <div className='underline'></div>
        <div className="tour-list">
          {tours.map(tour=>(
            <Tour key={tour.id} {...tour}></Tour>
          ))}
        </div>
    </section>
  )
}

export default Tours