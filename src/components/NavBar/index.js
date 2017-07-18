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
            <img src={Logo} alt='Sticky Budz' height='100px' />
          </Default>
          <Mobile>
            <img src={Logo} alt='Sticky Budz' height='50px' />
          </Mobile>
        </div>
        <nav className='navbarLinksOuterContainer'>
          <Default>
            <h1 className='navbarLink'>
              <Link to='/home'>
                Home
              </Link>
            </h1>
            <h1 className='navbarLink'>
              <Link to='/products'>
                Products
              </Link>
            </h1>
            <h1 className='navbarLink'>
              <Link to='/about'>
                About
              </Link>
            </h1>
            <h1 className='navbarLink'>
              <Link to='/map'>
                Find a Location
              </Link>
            </h1>
            <h1 className='navbarLink'>
              <Link to='/contact-us'>
                Contact Us
              </Link>
            </h1>
          </Default>
          <Mobile>
            <svg
              width='40'
              height='40'
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"/>
            </svg>
          </Mobile>
        </nav>
      </div>
    )
  }

  return null;
}
