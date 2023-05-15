import React from 'react'
import { productList } from '../../products'
import Product from './Product'
import './shop.css'
function Shop() {
  return (
    <div className="shop-items">
       {productList.map(product=><Product product={product}/>)} 
    </div>
  )
}

export default Shop