import React from 'react'
import './style.css'
function Menu({menuItems}) {
  return (
    <div className="section-center">
        {menuItems.map(item=>{
            const {id, title, category, price,img, desc} = item
            return(
                <article key={id} className="menu-item">
                    <img src={img} alt={title} className="photo"></img>
                    <div>
                        <header>
                            <h4>{title}</h4>
                            <h4 className="price">${price}</h4>
                        </header>
                        <p>{desc}</p>
                    </div>
                    

                </article>
            )
        })}
    </div>
  )
}

export default Menu