import React from 'react'
import { Link } from 'react-router-dom'
import styl from './Menu.module.css';
const Menu = () => {
  return (
    <div className={styl.menu}>
      <h1>Menu</h1>
      <ol>
        <li><Link to="/home" >Home</Link></li>
        <li><Link to="/about"> About</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/PagenotFound">ERRor</Link></li>
      </ol>
    </div>
  )
}

export default Menu
