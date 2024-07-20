import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
// import logo from './logo.png'
import { useState } from 'react'


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='navbar'>
      <div to='/'><h1>logo</h1></div>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {console.log('hello')}

      <ul className={menuOpen ? "open" : ""}>
        <li><a href='#process' >Home</a></li>
        <li> <a href='#services' >Services</a></li>
        <li> <a href='#about' >About us</a></li>
        <li> <a href='#reviews' >Reviews</a></li>
        <li><a href='#faqs' >Contact</a></li>
      </ul>
      <div className="navbar-right">
        <a href='#services' className='our-services'>See our services</a>
      </div>
    </div>
  )
}

export default Navbar