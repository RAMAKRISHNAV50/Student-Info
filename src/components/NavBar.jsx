import React from 'react'
import { NavLink,Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
         <a className="navbar-brand" >Student Info Portal</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold">
              <li className="nav-item">
               <NavLink className="nav-link" to={"/"}>Home</NavLink>
              </li>
              <li className="nav-item">
               <NavLink className="nav-link" to={"/about"}>About</NavLink>
              </li>
              <li className="nav-item">
               <NavLink className="nav-link" to={"/student"}>Students</NavLink>
              </li>
              <li className="nav-item">
               <NavLink className="nav-link" to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar