import React from 'react'
import { NavLink } from 'react-router-dom'

export default function navbar() {
  return (
    <>
       <nav className="navbar navbar-expand-lg shadow-sm bg-body-tertiary position-sticky top-0 z-1">
  <div className="container-fluid">
    <h3 className="navbar-brand" >NewsApp</h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-1">
          <NavLink className="nav-link" to="/business">Business</NavLink>
        </li>
        <li className="nav-item mx-1">
          <NavLink className="nav-link" to="/entertainment">Entertainment</NavLink>
        </li>
        <li className="nav-item mx-1">
          <NavLink className="nav-link" to="/general">General</NavLink>
        </li>
        <li className="nav-item mx-1">
          <NavLink className="nav-link" to="/health">Health</NavLink>
        </li>
        <li className="nav-item mx-1">
          <NavLink className="nav-link" to="/technology">Technology</NavLink>
        </li>
        <li className="nav-item mx-1">
          <NavLink className="nav-link" to="/sports">Sports</NavLink>
        </li>
        <li className="nav-item mx-1">
          <NavLink className="nav-link" to="/science">Science</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
