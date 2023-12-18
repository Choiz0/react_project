import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div className="navbar">
            <div className="logo">
                Book Finder
            </div>
            <div className="nav-links right">
                <NavLink to="/" className='nav-link'>Home</NavLink>
                <NavLink to="/about" className='nav-link'>About</NavLink>
                <NavLink to="/newsletter" className='nav-link'>Newsletter</NavLink>

            </div>
        </div>
    </nav>
  )
}

export default Navbar