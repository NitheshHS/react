import './App.css';
import React, {useEffect, useReducer, useState} from 'react'
import { images } from './data';
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs';
function App() {
  const [current, setCurrent]= useState(0);
  
  const getImage=images.find(img=>img.id==current)

  const leftClick=()=>{
    if(current===0){
      setCurrent(images.length-1)
    }else{
       setCurrent(prev=>prev-1)
    }
    
  }
  const rightClick=()=>{
    if(current<images.length-1){
      setCurrent(prev=>prev+1)
    }  
    else{
       setCurrent(0)
    }
      
  }
  

  return (
    <div className="container">
      <BsFillArrowLeftCircleFill className='arrowLeft' onClick={()=>leftClick()}/>
      <BsFillArrowRightCircleFill className='arrowRight' onClick={()=>rightClick()}/>
      <img className="carousel" src={getImage.link} ></img>
    </div>
  );
}

export default App;
