import React from 'react';
import logo from './logo.svg';
import './App.css';
import './App.scss';
import  * as ROUTES from './Constants/routes';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Bookings from './components/Bookings/Bookings'
import About from './components/About/About'
import NavigationBar from '../src/components/Navigation/NavigationBar';

function App() {
  return (
    <Router>

 <NavigationBar/>

<Route exact path={ROUTES.About} component={About} />
         
</Router>
  );
}

export default App;
