import React from 'react';
import { Link } from 'react-router-dom'
import Responsive from 'react-responsive';
import Logo from '../../assets/FullSizeRender.png'

import './style.css';

const Default = ({ children }) => <Responsive minWidth={768} className='navbarLinksContainer' children={children} />;
const Mobile = ({ children }) => <Responsive maxWidth={768} className='navbarLinksContainer' children={children} />;

export default function NavBar(props) {
  // To remove navbar from the AgeCheck landing page
  if (window.location.pathname !== '/') {
    return (
      <div className='navbarContainer'>
        <div className='navbarBrandContainer'>
          <Default>
            <img src={Logo} alt='Sticky Budz' height='100px' className='defaultLogo'/>
          </Default>
          <Mobile>
            <img src={Logo} alt='Sticky Budz' height='50px'className='mobileLogo'/>
          </Mobile>
        </div>
        <nav className='navbarLinksOuterContainer'>
          <Default>
            <h1>
              <Link to='/home'>
                Home
              </Link>
            </h1>
            <h1>
              <Link to='/products'>
                Products
              </Link>
            </h1>
            <h1>
              <Link to='/about'>
                About
              </Link>
            </h1>
            <h1>
              <Link to='/map'>
                Find a Location
              </Link>
            </h1>

            <h1>
              <Link to='/contact-us'>
                Contact Us
              </Link>
            </h1>
          </Default>
          <Mobile>
            <h1>
              <Link to='/contact-us'>
                Contact Us
              </Link>
            </h1>
          </Mobile>
        </nav>
      </div>
    )
  }

  return null;
}
