/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {

  return (
    <header>
        <Link className="site-logo" to="/">#VANLIFE</Link>
        <nav >         
        <NavLink className={({isActive}) => isActive ? "nav-link" : null}  to="/host">Host</NavLink>
        <NavLink className={({isActive}) => isActive ? "nav-link" : null} to="/about">About</NavLink>
        <NavLink className={({isActive}) => isActive ? "nav-link" : null} to="/vans">Vans</NavLink>
        </nav>         
    </header>
  )
}

export default Header