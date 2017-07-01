import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './components/Home';
import About from './components/About';
import Map from './components/Map';
import Strains from './components/Strains';
import ContactUs from './components/ContactUs';
import NotFound from './components/NotFound';
import AgeCheck from './components/AgeCheck';
import NavBar from './components/NavBar';

const Routes = (props) => (
  <Router {...props}>
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={AgeCheck} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/map" component={Map} />
        <Route path="/strains" component={Strains} />
        <Route path="/contact-us" component={ContactUs} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

/*
<Router {...props}>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/map" component={Map} />
    <Route path="/strains" component={Strains} />
    <Route path="/contact-us" component={ContactUs} />
    <Route component={NotFound} />
  </Switch>
</Router>
*/

export default Routes;
