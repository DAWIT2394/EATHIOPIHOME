import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  // Close the navbar on link click
  const handleNavLinkClick = () => {
    const navbar = document.getElementById('navbars-rs-food');
    if (navbar && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  };

  return (
    <header className='top-navbar'>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">

      <div className="container">
        <Link className="navbar-brand" to="/" onClick={handleNavLinkClick}>
          <img src="images/logoo.png" alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbars-rs-food"
          aria-controls="navbars-rs-food"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbars-rs-food">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/" onClick={handleNavLinkClick}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu" onClick={handleNavLinkClick}>Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleNavLinkClick}>About</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="dropdown-a" data-toggle="dropdown">
                Pages
              </Link>
              <div className="dropdown-menu" aria-labelledby="dropdown-a">
                <Link className="dropdown-item" to="/reservation" onClick={handleNavLinkClick}>Reservation</Link>
                <Link className="dropdown-item" to="/stuff" onClick={handleNavLinkClick}>Stuff</Link>
                <Link className="dropdown-item" to="/gallery" onClick={handleNavLinkClick}>Gallery</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="dropdown-b" data-toggle="dropdown">
                Blog
              </Link>
              <div className="dropdown-menu" aria-labelledby="dropdown-b">
                <Link className="dropdown-item" to="/blog" onClick={handleNavLinkClick}>Blog</Link>
                <Link className="dropdown-item" to="/blog-details" onClick={handleNavLinkClick}>Blog Single</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleNavLinkClick}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </header>
  );
}
