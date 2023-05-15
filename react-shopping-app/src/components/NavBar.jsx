import { ActionShoppingBasket } from 'material-ui/svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import './navbar.css'

function NavBar() {
  return (
    <div className="navbar">
        <div className="links">
            <h2>App Logo</h2>
            <div>
            <Link to={"/"}>Shop</Link>
            <Link to={"/cart"}><ShoppingCart size={32} /></Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar