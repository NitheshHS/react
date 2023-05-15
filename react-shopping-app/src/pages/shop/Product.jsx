import React, { useContext } from 'react'
import './shop.css'
import { shopContext } from '../../context/ShopContext'
function Product({product}) {
    const {addToCart}=useContext(shopContext)
    const handleAddToCart = ()=>{
        addToCart(product.id)
    }
    console.log(product);
  return (
    <div className="product" key={product.id}>
        <img src={product.image} alt='product-image'></img>
        <h3>{product.name}</h3>
        <h4>Price: ${product.price}</h4>
        <button className="cartBtn" onClick={handleAddToCart}>Add to cart</button>
    </div>
  )
}

export default Product