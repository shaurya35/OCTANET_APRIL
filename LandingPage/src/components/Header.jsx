import React from 'react'
import logo from '../assets/logo.png'
import "./Header.css"
const Header = () => {
  return (
    <header className='header'>
        <a href="#" className="logo">
            <img src={logo} alt="Logo" />
        </a>
        
        <nav className="navbar">
          <div className="fas fa-times" id='close'></div>
          <a href="#" className="nav_item">Home</a>
          <a href="#" className="nav_item">About</a>
          <a href="#" className="nav_item">Menu</a>
          <a href="#" className="nav_item">Contact</a>
        </nav>

        <div className="fas fa-bars"></div>
    </header>
  )
}

export default Header
