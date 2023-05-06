import React, { createRef, useState } from 'react'

function SearchCard({searchText}) {
    const [text, setText] = useState('')
    const handleSumbit=(e)=>{
        e.preventDefault();
        searchText(text);
    }
  return (
    <div class="input-container">
        <form onSubmit={handleSumbit}>
            <input type='text' value={text} onChange={e=>setText(e.target.value)}></input>
            <button type='submit'>Search</button>
        </form>   
    </div>
  )
}

export default SearchCard