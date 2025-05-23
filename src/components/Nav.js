import React from 'react'
import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="images/logoo.png" alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-rs-food" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbars-rs-food">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/menu">Menu</Link></li>
              <li className="nav-item "><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="dropdown-a" data-toggle="dropdown">Pages</Link>
                <div className="dropdown-menu" aria-labelledby="dropdown-a">
                  <Link className="dropdown-item" to="/reservation">Reservation</Link>
                  <Link className="dropdown-item" to="/stuff">Stuff</Link>
                  <Link className="dropdown-item" to="/gallery">Gallery</Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="dropdown-b" data-toggle="dropdown">Blog</Link>
                <div className="dropdown-menu" aria-labelledby="dropdown-b">
                  <Link className="dropdown-item" to="/blog">Blog</Link>
                  <Link className="dropdown-item" to="/blog-details">Blog Single</Link>
                </div>
              </li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
