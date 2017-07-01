import React from 'react';
import { Link } from 'react-router-dom'

import './style.css';

export default function NavBar() {
  return (
    <div className="navbarContainer">
      <div className="navbarBrandContainer">
        <h1>
          Brand
        </h1>
      </div>
      <nav className="navbarLinksContainer">
        <h1>
          <Link to="/home">
            Home
          </Link>
        </h1>
        <h1>
          <Link to="/products">
            Products
          </Link>
        </h1>
        <h1>
          <Link to="/about">
            About
          </Link>
        </h1>
        <h1>
          <Link to="/map">
            Find a Location
          </Link>
        </h1>

        <h1>
          <Link to="/contact-us">
            Contact Us
          </Link>
        </h1>
      </nav>
    </div>
  )
}
