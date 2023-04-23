import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FetchSingleData() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButton, setIdFromButton] = useState(id)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
        .then(res=>{
            console.log(res);
            setPost(res.data)
        })
    },[idFromButton])

    const changeIdHandler = ()=>{
        setIdFromButton(id)
    }

  return (
    <div>
        <input type='text' value={id} onChange={(e)=> setId(e.target.value)}></input>
        <button onClick={changeIdHandler}>Find</button>
        <h2>{post.title}</h2>
    </div>
  )
}

export default FetchSingleData