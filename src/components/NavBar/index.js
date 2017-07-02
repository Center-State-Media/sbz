import React from 'react';
import { Link } from 'react-router-dom'
import Responsive from 'react-responsive';

import './style.css';

const Default = ({ children }) => <Responsive minWidth={768} className="navbarLinksContainer" children={children} />;
const Mobile = ({ children }) => <Responsive maxWidth={768} className="navbarLinksContainer" children={children} />;

export default function NavBar() {
  return (
    <div className="navbarContainer">
      <div className="navbarBrandContainer">
        <h1>
          Brand
        </h1>
      </div>
      <nav className="navbarLinksOuterContainer">
        <Default>
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
        </Default>
        <Mobile>
          <h1>
            <Link to="/contact-us">
              Contact Us
            </Link>
          </h1>
        </Mobile>
      </nav>
    </div>
  )
}
