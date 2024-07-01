import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Images/logo.jpg'; 

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" style={{ height: '60px' }} /> {/* Increase the logo size */}
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/Home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/AboutUs">About</NavLink>
            </li>
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Diet Plan</a></li>
            <li><a className="dropdown-item" href="#">Nutrition</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            {/* <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>
          </ul>
        </div>
        <div className="d-flex">
          <NavLink to="/Login" className="btn btn-outline-primary btn-sm me-2">Login</NavLink>
          <NavLink to="/Register" className="btn btn-outline-primary  btn-sm me-2">Register</NavLink>
          <NavLink to="/Logout" className="btn btn-outline-primary  btn-sm ">Logout</NavLink>
        </div>
      </div>
    </nav>
  );
}
