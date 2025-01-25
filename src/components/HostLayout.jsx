/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function HostLayout() {
  const navStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616" ,
}
  return (
    <>
        <nav className="host-nav">
            <NavLink 
            style={({isActive}) => isActive ? navStyles : null}
            end={true}
            to="."
            >
              Dashboard
            </NavLink>
            <NavLink 
            style={({isActive}) => isActive ? navStyles : null}
            to="income"
            >
              Income
            </NavLink>
            <NavLink 
            style={({isActive}) => isActive ? navStyles : null}
            to="vans"
            >
              Vans
            </NavLink>
            <NavLink 
            style={({isActive}) => isActive ? navStyles : null}
            to="reviews"
            >
              Reviews
            </NavLink>
        </nav>        
         <Outlet />
    </>
   
  )
}

export default HostLayout