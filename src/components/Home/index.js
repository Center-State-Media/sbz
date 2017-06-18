import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom'

import logo from './logo.svg';
import './style.css';

class Home extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Home', className)} {...props}>
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2><Link to="/about">Will Match</Link></h2>
        </div>
        <p className="Home-intro">
          To get started, edit and save to reload.
        </p>
      </div>
    );
  }
}

export default Home;
