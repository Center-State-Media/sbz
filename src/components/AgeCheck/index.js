import React from 'react';
import { Link } from 'react-router-dom'
// import classnames from 'classnames';

import './style.css';

export default function AgeCheck() {
  return (
    <div className="container">
      <h1>
        Are you 21+ years old?
      </h1>
      <div className="optionsContainer">
        <h2>
          <Link to="/home">
            Yes
          </Link>
        </h2>
        <h2>
          <a href="https://google.com">
            No
          </a>
        </h2>
      </div>
    </div>
  )
}
