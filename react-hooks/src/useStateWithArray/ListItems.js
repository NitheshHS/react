import React, { useState } from 'react'

function ListItems() {
    const [items, setItems] = useState([])

    const addItemsToList = ()=>{
        setItems([...items,
            {id:items.length,
            name:Math.round(Math.random()*10)+1}])
    }
  return (
    <div>
        <button onClick={addItemsToList}>Add Items</button>
        <ul>
            {items.map(item=>{
                return <li key={item.id}>{item.name}</li>
            })}
        </ul>
    </div>
  )
}

export default ListItems