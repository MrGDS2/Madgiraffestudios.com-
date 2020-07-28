import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
import './App.scss';
import * as serviceWorker from './serviceWorker';
import NavigationBar from './components/Navigation/NavigationBar';
import Home from './components/Home/Home';
import About from './components/About/About';

const routing = (
    <Router>
        <NavigationBar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
    </Router>
  )


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
