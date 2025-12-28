import React from 'react'
import Menu from './Menu'
import sty from './Navbar.module.css';

const Navbar = () => {
  return (
    <div id={sty.new}>
      <h1>Nav Bar</h1>
      <Menu/>
    </div>
  )
}

export default Navbar
