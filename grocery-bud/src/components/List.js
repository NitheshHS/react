import React from 'react'
import {FiEdit} from 'react-icons/fi'
import {AiFillDelete} from 'react-icons/ai'
function List({items, removeItem, editItem}) {
  return (
    <div className="grocery-list">
        {items.map(item=>{
            const {id,title}=item;
            return (
                <article key={id} className="grocery-item">
                    <p className="title">{title}</p>
                    <div className="btn-conatiner">
                        <button type="button" className="edit-btn" onClick={()=>editItem(id)}>
                            <FiEdit/>
                        </button>
                        <button type="button" className="delete-btn" onClick={()=>removeItem(id)}>
                            <AiFillDelete/>
                        </button>
                    </div>

                </article>
            )
        })}
    </div>
  )
}

export default List